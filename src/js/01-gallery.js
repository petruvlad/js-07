import { galleryItems } from "./gallery-items.js";

const listEl = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("gallery__item");

  listItemEl.innerHTML = `<a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>`;

  listEl.appendChild(listItemEl);
});

listEl.addEventListener("click", openImageInLightbox);

function openImageInLightbox(event) {
  const clickedOn = event.target;

  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  const largeImageURL = clickedOn.dataset.source;

  const lightbox = basicLightbox.create(`
    <img src="${largeImageURL}" alt="${clickedOn.alt}" />
  `);

  lightbox.show();


  window.addEventListener("keydown", closeLightboxOnEscape);

  function closeLightboxOnEscape(event) {
    
    if (event.key === "Escape" && lightbox.visible()) {
      lightbox.close();
   
      window.removeEventListener("keydown", closeLightboxOnEscape);
    }
  }
}
