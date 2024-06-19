import getPictures from './js/pixabay-api';
import imagesTemplate from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { iziToastUnsuccessObj } from './js/iziToast-settings';
import { iziToastWarnObj } from './js/iziToast-settings';
import { iziToastErrorObj } from './js/iziToast-settings';

const refs = {
  formElem: document.querySelector('.js-pixabay-form'),
  pixabayListElem: document.querySelector('.js-pixabay-galery'),
  loaderContainerElem: document.querySelector('.js-loader-container'),
};

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  refs.pixabayListElem.innerHTML = '';
  const searchQuery = e.target.elements.query.value;
  if (searchQuery !== '') {
    showLoader();
    getPictures(searchQuery)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.error(iziToastUnsuccessObj);
        }
        const markup = imagesTemplate(data);
        refs.pixabayListElem.insertAdjacentHTML('afterbegin', markup);
        let gallery = new SimpleLightbox('.gallery-link', {
          captionsData: 'alt',
          captionDelay: 250,
        });
        gallery.refresh();
      })
      .catch(err => {
        iziToast.error(iziToastErrorObj);
      })
      .finally(() => {
        hideLoader();
      });
  } else {
    iziToast.warning(iziToastWarnObj);
  }
  e.target.reset();
});

function hideLoader() {
  refs.loaderContainerElem.classList.add('hidden');
}
function showLoader() {
  refs.loaderContainerElem.classList.remove('hidden');
}
