import{i as n,S as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function m(r){const t="44429729-af770c699ef9a399bd7256131",a="https://pixabay.com",l="/api/",e=new URLSearchParams({key:t,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${a}${l}?${e}`;return fetch(s).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function u(r){return r.hits.map(t=>` <li class="gallery-item">
      <div class="thumb">
          <a class="gallery-link" href=${t.largeImageURL}>
            <img class="gallery-image" src=${t.webformatURL} alt=${t.tags} />
          </a>
</div>
          <ul class="stat-list">
            <li class="stat-elem">
              <p class="stat-elem-name">Likes</p>
              <p class="stat-elem-score">${t.likes}</p>
            </li>
            <li class="stat-elem">
              <p class="stat-elem-name">Views</p>
              <p class="stat-elem-score">${t.views}</p>
            </li>
            <li class="stat-elem">
              <p class="stat-elem-name">Comments</p>
              <p class="stat-elem-score">${t.comments}</p>
            </li>
            <li class="stat-elem">
              <p class="stat-elem-name">Downloads</p>
              <p class="stat-elem-score">${t.downloads}</p>
            </li>
          </ul>
        </li>`).join("")}const i={formElem:document.querySelector(".js-pixabay-form"),pixabayListElem:document.querySelector(".js-pixabay-galery"),loaderContainerElem:document.querySelector(".js-loader-container")},p={title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(255, 99, 71)",titleColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",messageSize:"16",iconColor:"rgb(255, 255, 255)",theme:"dark",progressBarColor:"rgb(255, 255, 255)",position:"topRight"};i.formElem.addEventListener("submit",r=>{r.preventDefault(),i.pixabayListElem.innerHTML="";const t=r.target.elements.query.value;f(),m(t).then(a=>{a.hits.length===0&&n.error(p);const l=u(a);i.pixabayListElem.insertAdjacentHTML("afterbegin",l),new c(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}).catch(a=>{console.log(a)}).finally(()=>{d()}),r.target.reset()});function d(){i.loaderContainerElem.classList.add("hidden")}function f(){i.loaderContainerElem.classList.remove("hidden")}
//# sourceMappingURL=commonHelpers.js.map
