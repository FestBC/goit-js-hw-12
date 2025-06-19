import{a as m,S as f,i as n}from"./assets/vendor-BIn0hBn5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function y(o){return m.get("https://pixabay.com/api/",{params:{key:"50853448-3ef625935151d0418802f2043",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data.hits)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new f(".gallery a");function g(o){const s=o.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:a,comments:p,downloads:d})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${i}">
                <ul class="stats">
                    <li class="stats-item">
                        <p class="likes">
                            Likes
                            <span>${t}</span>
                        </p>
                    </li>
                    <li class="stats-item">
                        <p class="views">
                            Views
                            <span>${a}</span>
                        </p>
                    </li>
                    <li class="stats-item">
                        <p class="comments">
                            Comments
                            <span>${p}</span>
                        </p>
                    </li>
                    <li class="stats-item">
                        <p class="downloads">
                            Downloads
                            <span>${d}</span>
                        </p>
                    </li>
                </ul>
                <img src="${r}" alt="${e}">
            </a>
        </li>
    `).join("");c.insertAdjacentHTML("beforeend",s),h.refresh()}function L(){c.innerHTML=""}function v(){u.classList.remove("visually-hidden")}function w(){u.classList.add("visually-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const s=l.elements["search-text"].value.trim();if(!s){n.error({message:"Please, enter a valid search query.",position:"topRight"});return}L(),v(),y(s).then(r=>{if(!r.length){n.error({message:"There are no images with this query. Enter an another query.",position:"topRight"});return}g(r)}).catch(r=>{n.error({message:"Oops... Something went wrong. Please, try again later.",position:"topRight"})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
