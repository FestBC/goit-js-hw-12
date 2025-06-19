import getImagesByQuery from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(".form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const query = form.elements["search-text"].value.trim();

    if (!query) {
        iziToast.error({
            message: "Please, enter a valid search query.",
            position: "topRight"
        });
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then(images => {
            if (!images.length) {
                iziToast.error({
                    message: "There are no images with this query. Enter an another query.",
                    position: "topRight"
                });
                return;
            }
            createGallery(images);
        })
        .catch(error => {
            iziToast.error({
                message: "Oops... Something went wrong. Please, try again later.",
                position: "topRight"
            });
        })
        .finally(() => { hideLoader(); });
});