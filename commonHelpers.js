import{i as n,S as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function m(s){const t="44429729-af770c699ef9a399bd7256131",o="https://pixabay.com",i="/api/",e=new URLSearchParams({key:t,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${o}${i}?${e}`;return fetch(r).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}function g(s){return s.hits.map(t=>` <li class="gallery-item">
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
        </li>`).join("")}const u={title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(255, 99, 71)",titleColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",messageSize:"16",iconColor:"rgb(255, 255, 255)",theme:"dark",progressBarColor:"rgb(255, 255, 255)",position:"topRight"},p={title:"",message:"You forgot to fill in the search field",backgroundColor:"rgb(255, 165, 0)",messageSize:"16",iconColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",theme:"dark",progressBarColor:"rgb(255, 255, 255)",position:"topRight"},d={title:"Error",message:"Sorry, something went wrong...",backgroundColor:"rgb(255, 99, 71)",titleColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",messageSize:"16",iconColor:"rgb(255, 255, 255)",theme:"dark",progressBarColor:"rgb(255, 255, 255)",position:"topRight"},l={formElem:document.querySelector(".js-pixabay-form"),pixabayListElem:document.querySelector(".js-pixabay-galery"),loaderContainerElem:document.querySelector(".js-loader-container")};l.formElem.addEventListener("submit",s=>{s.preventDefault(),l.pixabayListElem.innerHTML="";const t=s.target.elements.query.value;t!==""?(h(),m(t).then(o=>{o.hits.length===0&&n.error(u);const i=g(o);l.pixabayListElem.insertAdjacentHTML("afterbegin",i),new c(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>{n.error(d)}).finally(()=>{f()})):n.warning(p),s.target.reset()});function f(){l.loaderContainerElem.classList.add("hidden")}function h(){l.loaderContainerElem.classList.remove("hidden")}
//# sourceMappingURL=commonHelpers.js.map
