const filterIcon = document.querySelector("#filter-button");
const filter = document.querySelector(".filter");
filterIcon.addEventListener("click", function (e) {
  document.body.classList.toggle("_lock");
  //filterIcon.classList.toggle("filter-active");
  filter.classList.toggle("filter-active");
});