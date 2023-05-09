// Get references to the gallery and lightbox elements
const gallery = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox__img");

// Get references to the close, prev, and next buttons in the lightbox
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Initialize the index of the currently displayed image to 0
let currentIndex = 0;

// Add click event listener to each image in the gallery
gallery.querySelectorAll("img").forEach((img, index) => {
  img.addEventListener("click", () => {
    // Update the src attribute of the lightbox image to display the clicked image
    lightboxImg.src = img.src;

    // Update the index of the currently displayed image
    currentIndex = index;

    // Add the "show" class to the lightbox to display it
    lightbox.classList.add("show");
  });
});

// Add click event listener to close button to hide the lightbox
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

// Add click event listener to prev button to display the previous image
prevBtn.addEventListener("click", () => {
  // Decrement the index of the currently displayed image
  currentIndex--;

  // If the index is less than 0, wrap around to the last image
  if (currentIndex < 0) {
    currentIndex = gallery.querySelectorAll("img").length - 1;
  }

  // Update the src attribute of the lightbox image to display the previous image
  lightboxImg.src = gallery.querySelectorAll("img")[currentIndex].src;
});

// Add click event listener to next button to display the next image
nextBtn.addEventListener("click", () => {
  // Increment the index of the currently displayed image
  currentIndex++;

  // If the index is greater than the number of images, wrap around to the first image
  if (currentIndex >= gallery.querySelectorAll("img").length) {
    currentIndex = 0;
  }

  // Update the src attribute of the lightbox image to display the next image
  lightboxImg.src = gallery.querySelectorAll("img")[currentIndex].src;
});
