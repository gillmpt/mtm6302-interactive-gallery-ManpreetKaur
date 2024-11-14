const images = [
  {
    thumbnail: 'images/thumbnail1.jpg',
    hd: 'images/hd1.jpg',
    caption: 'Children in India.',
  },
  {
    thumbnail: 'images/thumbnail2.jpg',
    hd: 'images/hd2.jpg',
    caption: 'But first, coffee..!!',
  },
  {
    thumbnail: 'images/thumbnail3.jpg',
    hd: 'images/hd3.jpg',
    caption: 'Large Book shelves in a Library, somewhere in Dublin.',
  },
  {
    thumbnail: 'images/thumbnail4.jpg',
    hd: 'images/hd4.jpg',
    caption: 'A Scenic Morning View in a feild.',
  },
  {
    thumbnail: 'images/thumbnail5.jpg',
    hd: 'images/hd5.jpg',
    caption: 'A peaceful moment on the shore.',
  },
  {
    thumbnail: 'images/thumbnail6.jpg',
    hd: 'images/hd6.jpg',
    caption: 'Majestic beauty.',
  },
  {
    thumbnail: 'images/thumbnail7.jpg',
    hd: 'images/hd7.jpg',
    caption: 'Beach life in a snapshot.', 
  },
  {
    thumbnail: 'images/thumbnail8.jpg',
    hd: 'images/hd8.jpg',
    caption: 'Where the earth meets the sky.', 
  },
  {
    thumbnail: 'images/thumbnail9.jpg',
    hd: 'images/hd9.jpg',
    caption: 'A winter walk to remember.', 
  },
  {
    thumbnail: 'images/thumbnail10.jpg',
    hd: 'images/hd10.jpg',
    caption: 'Let the waves wash away your worries.', 
  },
  {
    thumbnail: 'images/thumbnail11.jpg',
    hd: 'images/hd11.jpg',
    caption: 'My favorite season.', 
  },
  {
    thumbnail: 'images/thumbnail12.jpg',
    hd: 'images/hd12.jpg',
    caption: 'Finding my reflection in nature.', 
  },
];

function createGallery() {
  const galleryContainer = document.querySelector('.gallery-container');

  for (const image of images) {
    const imgElement = document.createElement('img');
    imgElement.src = image.thumbnail;
    imgElement.alt = image.caption;
    imgElement.dataset.hd = image.hd;
    imgElement.dataset.caption = image.caption;
    galleryContainer.appendChild(imgElement);
  }
}

const modal = document.getElementById('imageModal');
const modalImg = document.querySelector('.modal-image');
const modalCaption = document.querySelector('.modal-caption');
const closeModal = document.querySelector('.close-modal');

function showExpandedView(hdSrc, caption) {
  modal.style.display = 'block';
  modalImg.src = hdSrc;
  modalImg.alt = caption;
  modalCaption.textContent = caption;
}

function hideExpandedView() {
  modal.style.display = 'none';
}

closeModal.addEventListener('click', hideExpandedView);

// Event listener for clicking on the modal image to close it
modalImg.addEventListener('click', hideExpandedView); 

const galleryContainer = document.querySelector('.gallery-container');
galleryContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const hdSrc = event.target.dataset.hd;
    const caption = event.target.dataset.caption;
    showExpandedView(hdSrc, caption);
  }
});

createGallery();