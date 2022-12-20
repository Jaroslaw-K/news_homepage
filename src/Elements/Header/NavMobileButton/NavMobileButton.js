// EVENT LISTER RESPONSIBLE FOR NAVIGATION BUTTON ANIMATION AND SHOWING-HIDING MOBILE NAVIGATION
const navMobileButton = document.querySelector(".header__navMobileButton");
const navMobile = document.querySelector(".navMobile");

let counter = 0;
navMobileButton.addEventListener("click", function () {
  if (counter === 0) {
    this.classList.remove("header__navMobileButton--close");
    this.classList.add("header__navMobileButton--open");
    navMobile.classList.remove("navMobile--close");
    navMobile.classList.add("navMobile--open");
    counter = 1;
  } else {
    this.classList.remove("header__navMobileButton--open");
    this.classList.add("header__navMobileButton--close");
    navMobile.classList.remove("navMobile--open");
    navMobile.classList.add("navMobile--close");
    const removeClass = setTimeout(() => {
      navMobile.classList.remove("navMobile--close");
      if (removeClass) {
        clearTimeout(removeClass);
      }
    }, 500);
    counter = 0;
  }
});
