import axios from "axios";

export default async function getImagesByQuery(query, page) {
    const response = await axios.get("https://pixabay.com/api/", {
        params: {
            key: "50853448-3ef625935151d0418802f2043",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page: page,
            per_page: 15
        }
    });
    return response.data;
}