const toggleEl = document.querySelector(".toggle-bar");
const circleEl = document.querySelector(".circle");
const basicPrice = document.querySelector(".basic .price");
const professionalPrice = document.querySelector(".professional .price");
const masterPrice = document.querySelector(".master .price");

let count = 1;

toggleEl.addEventListener("click", function () {
  if (count) {
    circleEl.style.left = "2.5rem";
    basicPrice.innerHTML = `<span class="dollar">&dollar;</span>19.99`;
    professionalPrice.innerHTML = `<span class="dollar">&dollar;</span>24.99`;
    masterPrice.innerHTML = `<span class="dollar">&dollar;</span>39.99`;
  } else {
    circleEl.style.left = "0.5rem";
    basicPrice.innerHTML = `<span class="dollar">&dollar;</span>199.99`;
    professionalPrice.innerHTML = `<span class="dollar">&dollar;</span>249.99`;
    masterPrice.innerHTML = `<span class="dollar">&dollar;</span>399.99`;
  }
  count = !count;
});
