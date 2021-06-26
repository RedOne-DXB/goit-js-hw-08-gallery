const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const imgListRoot = document.querySelector('.js-gallery');
const openModal = document.querySelector('.js-lightbox')
const modalImg = document.querySelector(".lightbox__image")
const closeBtn = document.querySelector('[data-action="close-lightbox"]')
 console.log('open_modal', openModal);
const addItems = galleryItems => {
    return `<li class='gallery__item'><a href='#' class='gallery__link'><img src='${galleryItems.preview}' data-source='${galleryItems.original}' alt='${galleryItems.description}' class='gallery__image'/></a></li>`
}

const itemsCompilation = galleryItems.map(addItems).join('');

imgListRoot.insertAdjacentHTML('afterbegin', itemsCompilation);
document.body.appendChild(imgListRoot);

openModal.addEventListener('click', () => {
  openModal.classList.add('is-open');
  console.log('open_modal', openModal);
})

// closeBtn.addEventListener('click', () => {
//   document.body.classList.remove('is-open');
// })


// imgListRoot.addEventListener("click", onImgClick);
// closeBtn.addEventListener("click", onCloseModal)



// function onImgClick(event) { 
//   const targetImg = event.target;
//   console.log("event target: ", targetImg)
//   openModal.classList.toggle("is-open")
//   modalImg.src = targetImg.dataset.source
// };

// function onCloseModal(event) {
//   const targetCloseBtn = event.target;
//   openModal.classList.toggle("is-open")
//     modalImg.src = ""
// }