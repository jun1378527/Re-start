document.addEventListener("DOMContentLoaded", function () {
  const slide = document.querySelector(".carousel-slide");
  const images = document.querySelectorAll(".carousel-slide img");
  const prevBtn = document.getElementById("left");
  const nextBtn = document.getElementById("right");

  let counter = 1; // 첫 번째 실제 이미지의 위치
  let size = images[0].clientWidth;

  // 창 크기가 변할 때마다 이미지 크기를 재조정합니다.
  window.addEventListener("resize", () => {
    size = images[0].clientWidth;
    slide.style.transform = "translateX(" + -size * counter + "px)";
  });

  nextBtn.addEventListener("click", () => {
    if (counter >= images.length - 2) counter = -1; // 마지막 이미지에서 더 클릭하면 첫 번째 이미지로
    counter++;
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transform = "translateX(" + -size * counter + "px)";
  });

  prevBtn.addEventListener("click", () => {
    if (counter <= 0) counter = images.length - 2; // 첫 번째 이미지에서 더 클릭하면 마지막 이미지로
    counter--;
    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transform = "translateX(" + -size * counter + "px)";
  });

  slide.addEventListener("transitionend", () => {
    if (images[counter].id === "lastClone") {
      slide.style.transition = "none";
      counter = 1; // 첫 번째 실제 이미지 위치로 이동
      slide.style.transform = "translateX(" + -size * counter + "px)";
    } else if (images[counter].id === "firstClone") {
      slide.style.transition = "none";
      counter = images.length - 2; // 마지막 실제 이미지 위치로 이동
      slide.style.transform = "translateX(" + -size * counter + "px)";
    }
  });
});
