document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const mainScreen = document.querySelector(".main-screen");
  const workPage = document.querySelector(".work-page")

  const updateMargin = () => {
    let headerHeight = header.offsetHeight;
    if (mainScreen) mainScreen.style.paddingTop = headerHeight + "px";
    if (workPage) workPage.style.paddingTop = headerHeight + "px"
  };

  updateMargin();

  window.addEventListener("resize", updateMargin);
});


window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});
