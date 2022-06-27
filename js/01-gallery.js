import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const blokListGallery = document.querySelector(".gallery");

const imgCardSet = listGalleryItems(galleryItems);

blokListGallery.insertAdjacentHTML("beforeend", imgCardSet);
blokListGallery.addEventListener("click", onImgCardsClick);

function listGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  />
  </a>
  </div>`
    )
    .join("");
}

function onImgCardsClick(evt) {
  evt.preventDefault();
  const isCardsSwatchEl = evt.target.classList.contains("gallery__image");
  if (!isCardsSwatchEl) {
    return;
  }

  const imagesCardSetEl = evt.target;

  const modal = basicLightbox.create(`
    <img src="${imagesCardSetEl.dataset.source}" width="800" height="600">`);
  modal.show(() => {
    window.addEventListener("keydown", (evt) => {
      const isEscKey = evt.code === "Escape";

      if (isEscKey) {
        modal.close();
      }
    });
  });
}
blokListGallery.addEventListener("click", onImgCardsClick);
