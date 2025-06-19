import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const galleryBox = new SimpleLightbox(".gallery a");

export function createGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <ul class="stats">
                    <li class="stats-item">
                        <p class="likes">
                            Likes
                            <span>${likes}</span>
                        </p>
                    </li>
                    <li class="stats-item">
                        <p class="views">
                            Views
                            <span>${views}</span>
                        </p>
                    </li>
                    <li class="stats-item">
                        <p class="comments">
                            Comments
                            <span>${comments}</span>
                        </p>
                    </li>
                    <li class="stats-item">
                        <p class="downloads">
                            Downloads
                            <span>${downloads}</span>
                        </p>
                    </li>
                </ul>
                <img src="${webformatURL}" alt="${tags}">
            </a>
        </li>
    `)
    .join("");

    gallery.insertAdjacentHTML("beforeend", markup);

    galleryBox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loader.classList.remove("visually-hidden");
}

export function hideLoader() {
    loader.classList.add("visually-hidden");
}