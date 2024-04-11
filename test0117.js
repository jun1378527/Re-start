document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".row img");
  const lightboxImages = document.querySelectorAll(".lightbox-image");
  const lightbox = document.getElementById("lightbox");

  images.forEach((image, index) => {
    image.addEventListener("click", function () {
      lightboxImages.forEach((img) => {
        img.style.display = "none";
      });

      lightboxImages[index].style.display = "block";

      lightbox.style.display = "flex";
      lightbox.style.justifyContent = "center";
      lightbox.style.alignItems = "center";
    });
  });

  lightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
  });
});
