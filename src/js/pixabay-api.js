import axios from "axios";

export default function getImagesByQuery(query) {
    return axios.get("https://pixabay.com/api/", {
        params: {
            key: "50853448-3ef625935151d0418802f2043",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    })
    .then(response => response.data.hits);
}