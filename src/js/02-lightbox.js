import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  listItem.innerHTML = `
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
  `;

  gallery.appendChild(listItem);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  closeText: "Închide",
});
