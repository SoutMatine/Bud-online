document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const mainScreen = document.querySelector(".main-screen");

  const updateMargin = () => {
    let headerHeight = header.offsetHeight;
    mainScreen.style.paddingTop = headerHeight + "px";
  };

  updateMargin();

  window.addEventListener("resize", updateMargin);
});


window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});
