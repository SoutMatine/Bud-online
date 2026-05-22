gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1.5,
  clean: 1, // Inertia depth
  results: true, // Allow per-element scroll lag
  normalizeScroll: true,
  ignoreMobileResize: true,
})

const header = document.querySelector("header")

const mainText = new SplitType("#mainText")
const mainSubtitle = document.querySelector("#mainSubtitle")

gsap.set(mainSubtitle, { y: -25, opacity: 0 })
gsap.set(header, { opacity: 0 })

setTimeout(() => {
  gsap.to('.char', {
    y: 0,
    stagger: 0.01,
    delay: 0.1,
    duration: 0.1
  })

  gsap.to(mainSubtitle,
    { y: 0, opacity: 1, duration: 0.5, delay: 1 }
  )

  gsap.to(header,
    { opacity: 1, duration: 0.5, delay: 1.5 }
  )

}, 500);







const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.main-screen',
    start: 'top top',
    end: '250svh', // длина скролла = высоте hero
    pin: true,
    scrub: 1,
    anticipatePin: 1
  }
});

// Анимация перекрытия
tl.to('.completed-works', {
  y: '-80svh', // или '-100svh', поднимаем контейнер вверх
  ease: 'none',
  duration: 3
});



/* ======================= Header Animation ======================= */

const headerAnims = document.querySelectorAll(".header-anim");

document.querySelectorAll(".dark-section").forEach((section) => {
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

    markers: false,
  });
});

/* ======================= Header Animation ======================= */




/* ======================= Completed Works ======================= */
let itemLeft = gsap.utils.toArray('.grid-line .left-item')
let itemRight = gsap.utils.toArray('.grid-line .right-item')

let item = gsap.utils.toArray('.grid-line')
item.forEach(item => {
  gsap.fromTo(item, { y: 300, opacity: 0.5, scale: 0.9 }, {
    opacity: 1, y: 0, scale: 1,
    scrollTrigger: {
      trigger: item,
      start: 'top bottom+=700',
      end: 'top top+=1200',
      scrub: 1,
      once: true,

    }
  })
})

itemLeft.forEach(item => {
  gsap.fromTo(item, { x: -500, opacity: 1 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: item,
      start: 'top bottom+=700',
      end: 'top top+=1100',
      scrub: true,
      once: true,
    }
  }
  )
})

itemRight.forEach(item => {
  gsap.fromTo(item, { x: 500, opacity: 1 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: item,
      start: 'top bottom+=700',
      end: 'top top+=1100',
      scrub: true,
      once: true,
    }
  }
  )
})