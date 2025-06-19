import{a as S,S as $,i as a}from"./assets/vendor-BIn0hBn5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();async function p(s,e){return(await S.get("https://pixabay.com/api/",{params:{key:"50853448-3ef625935151d0418802f2043",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const m=document.querySelector(".gallery"),B=new $(".gallery a"),f=document.querySelector("#load-more-btn"),h=document.querySelector(".loader");function y(s){const e=s.map(({webformatURL:n,largeImageURL:l,tags:t,likes:r,views:i,comments:b,downloads:q})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${l}">
                <ul class="stats">
                    <li class="stats-item">
                        <p class="likes">
                            Likes
                            <span>${r}</span>
                        </p>
                    </li>
                    <li class="stats-item">
                        <p class="views">
                            Views
                            <span>${i}</span>
                        </p>
                    </li>
                    <li class="stats-item">
                        <p class="comments">
                            Comments
                            <span>${b}</span>
                        </p>
                    </li>
                    <li class="stats-item">
                        <p class="downloads">
                            Downloads
                            <span>${q}</span>
                        </p>
                    </li>
                </ul>
                <img src="${n}" alt="${t}">
            </a>
        </li>
    `).join("");m.insertAdjacentHTML("beforeend",e),B.refresh()}function O(){m.innerHTML=""}function g(){h.classList.remove("visually-hidden")}function L(){h.classList.add("visually-hidden")}function v(){f.classList.remove("visually-hidden")}function w(){f.classList.add("visually-hidden")}const d=document.querySelector(".form"),P=document.querySelector("#load-more-btn"),u=15;let c,o;d.addEventListener("submit",s=>{if(s.preventDefault(),c=d.elements["search-text"].value.trim(),o=1,!c){a.error({message:"Please, enter a valid search query.",position:"topRight"});return}w(),O(),g(),p(c,o).then(e=>{if(!e.totalHits){a.error({message:"There are no images with this query. Enter an another query.",position:"topRight"});return}y(e.hits),o<e.totalHits/u?v():a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}).catch(e=>{a.error({message:"Oops... Something went wrong. Please, try again later.",position:"topRight"})}).finally(()=>{L()})});P.addEventListener("click",s=>{w(),g(),o++,p(c,o).then(e=>{if(y(e.hits),o>=e.totalHits/u){a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}v()}).catch(e=>{a.error({message:"Oops... Something went wrong. Please, try again later.",position:"topRight"})}).finally(()=>{const e=document.querySelector(`.gallery-item:nth-child(${(o-1)*u+1})`).getBoundingClientRect();L(),scrollBy({top:e.y,behavior:"smooth"})})});
//# sourceMappingURL=index.js.map
