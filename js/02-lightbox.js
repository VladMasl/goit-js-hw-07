import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const blokListGallery = document.querySelector(".gallery");

const imgCardSet = listGalleryItems(galleryItems);

blokListGallery.insertAdjacentHTML("beforeend", imgCardSet);

function listGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  alt="${description}"
  />
  </a>`
    )
    .join("");
}

new SimpleLightbox(".gallery__link ", {
  
  captionsData: "alt",

  captionDelay: "250",

  enableKeyboard: "true",
});
