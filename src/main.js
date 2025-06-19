import getImagesByQuery from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector("#load-more-btn");
const perPage = 15;
let query;
let page;

form.addEventListener("submit", event => {
    event.preventDefault();
    query = form.elements["search-text"].value.trim();
    page = 1;

    if (!query) {
        iziToast.error({
            message: "Please, enter a valid search query.",
            position: "topRight"
        });
        return;
    }

    hideLoadMoreButton();
    clearGallery();
    showLoader();

    getImagesByQuery(query, page)
        .then(images => {
            if (!images.totalHits) {
                iziToast.error({
                    message: "There are no images with this query. Enter an another query.",
                    position: "topRight"
                });
                return;
            }

            createGallery(images.hits);
            
            if (page < images.totalHits / perPage) {
                showLoadMoreButton();
            } else {
                iziToast.info({
                    message: "We're sorry, but you've reached the end of search results.",
                    position: "topRight"
                });
            }
        })
        .catch(error => {
            iziToast.error({
                message: "Oops... Something went wrong. Please, try again later.",
                position: "topRight"
            });
        })
        .finally(() => { hideLoader(); });
});

loadMoreBtn.addEventListener("click", event => {
    hideLoadMoreButton();
    showLoader();
    
    page++;
    getImagesByQuery(query, page)
        .then(images => {
            createGallery(images.hits);

            if (page >= images.totalHits / perPage) {
                iziToast.info({
                    message: "We're sorry, but you've reached the end of search results.",
                    position: "topRight"
                });
                return;
            }

            showLoadMoreButton();
        })
        .catch(error => {
            iziToast.error({
                message: "Oops... Something went wrong. Please, try again later.",
                position: "topRight"
            });
        })
        .finally(() => {
            // Тут мы берём информацию про размер и позицию первого элемента страницы галереи,
            // которую мы только что запросили.
            const rect = document.querySelector(`.gallery-item:nth-child(${(page - 1) * perPage + 1})`)
                .getBoundingClientRect();

            hideLoader();
            scrollBy({
                top: rect.y,
                behavior: "smooth"
            });
        });
});