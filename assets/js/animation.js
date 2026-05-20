gsap.registerPlugin(ScrollTrigger);
const headerAnims = document.querySelectorAll(".header-anim");

document.querySelectorAll(".trigger-section").forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "-1px",
    end: "bottom",

    onEnter: () => {
      headerAnims.forEach((e) => {
        e.classList.remove("header-change");
      });
    },

    onLeave: () => {
      headerAnims.forEach((e) => {
        e.classList.add("header-change");
      });
    },

    onEnterBack: () => {
      headerAnims.forEach((e) => {
        e.classList.remove("header-change");
      });
    },

    onLeaveBack: () => {
      headerAnims.forEach((e) => {
        e.classList.add("header-change");
      });
    },

    markers: true,
  });
});
