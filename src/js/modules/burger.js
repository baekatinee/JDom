   const menuIcon = document.querySelector(".icon-menu");
   const menuBody = document.querySelector(".menu__body");
   menuIcon.addEventListener("click", function (e) {
     document.body.classList.toggle("_lock");
     menuIcon.classList.toggle("_active");
     menuBody.classList.toggle("_active");
   });