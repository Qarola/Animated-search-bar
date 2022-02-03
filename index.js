const searchBarCtnEl = document.querySelector(".search-bar-ctn");
const magnifierEl = document.querySelector(".magnifier");
const inputEl = document.querySelector(".input");

searchBarCtnEl.addEventListener("click", () => {
  if (inputEl.value) {
    searchBarCtnEl.classList.toggle("active");
  }
});
