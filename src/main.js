import getPictures from './js/pixabay-api';
import imagesTemplate from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  formElem: document.querySelector('.js-pixabay-form'),
  pixabayListElem: document.querySelector('.js-pixabay-galery'),
  loaderContainerElem: document.querySelector('.js-loader-container'),
};
const iziToastObj = {
  title: '',
  message: `Sorry, there are no images matching your search query. Please try again!`,
  backgroundColor: 'rgb(255, 99, 71)',
  titleColor: 'rgb(255, 255, 255)',
  messageColor: 'rgb(255, 255, 255)',
  messageSize: '16',
  iconColor: 'rgb(255, 255, 255)',
  theme: 'dark',
  progressBarColor: 'rgb(255, 255, 255)',
  position: 'topRight',
};

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  refs.pixabayListElem.innerHTML = '';
  const searchQuery = e.target.elements.query.value;
  showLoader();
  getPictures(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error(iziToastObj);
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
      console.log(err);
    })
    .finally(() => {
      hideLoader();
    });
  e.target.reset();
});

function hideLoader() {
  refs.loaderContainerElem.classList.add('hidden');
}
function showLoader() {
  refs.loaderContainerElem.classList.remove('hidden');
}
