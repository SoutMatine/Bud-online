gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1.5,
  clean: 1,
  results: true,
  normalizeScroll: true,
  ignoreMobileResize: true,
})

const header = document.querySelector("header")
gsap.from(header, {
  opacity: 0,
  duration: 0.5,
  delay: 2.3,
})

const mainScreenTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.main-screen',
    start: 'top top',
    end: '50%',
    pin: true,
    scrub: 1,
  }
})

mainScreenTl.to('.completed-works', {
  y: "-100svh",
  ease: 'none',
  duration: 3
}, '>0.2')

let itemLeft = gsap.utils.toArray('.grid-line .left-item')
let itemRight = gsap.utils.toArray('.grid-line .right-item')
let item = gsap.utils.toArray('.grid-line')


gsap.utils.toArray('.grid-line').forEach((item, i) => {
  mainScreenTl.fromTo(item,
    { y: 300, opacity: 0.5, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.8 },
    i * 0.4
  )
})

itemLeft.forEach((item, i) => {
  mainScreenTl.fromTo(item,
    { x: -500 },
    { x: 0, scale: 1, duration: 1 },
    i * 0.5
  )
})

itemRight.forEach((item, i) => {
  mainScreenTl.fromTo(item,
    { x: 500 },
    { x: 0, scale: 1, duration: 1 },
    i * 0.5
  )
})



// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.main-screen',
//     start: 'top top',
//     end: '250svh', // длина скролла = высоте hero
//     pin: true,
//     scrub: 1,
//     anticipatePin: 1
//   }
// });

// // Анимация перекрытия
// tl.to('.completed-works', {
//   y: '-100svh', // или '-100svh', поднимаем контейнер вверх
//   ease: 'none',
//   duration: 3
// });

// /* ======================= Completed Works ======================= */
// let itemLeft = gsap.utils.toArray('.grid-line .left-item')
// let itemRight = gsap.utils.toArray('.grid-line .right-item')

// let item = gsap.utils.toArray('.grid-line')
// item.forEach(item => {
//   gsap.fromTo(item, { y: 300, opacity: 0.5, scale: 0.9 }, {
//     opacity: 1, y: 0, scale: 1,
//     scrollTrigger: {
//       trigger: item,
//       start: 'top bottom+=700',
//       end: 'top top+=1200',
//       scrub: 1,
//       once: true,

//     }
//   })
// })

// itemLeft.forEach(item => {
//   gsap.fromTo(item, { x: -500, opacity: 1 }, {
//     opacity: 1, x: 0,
//     scrollTrigger: {
//       trigger: item,
//       start: 'top bottom+=700',
//       end: 'top top+=1100',
//       scrub: true,
//       once: true,
//     }
//   }
//   )
// })

// itemRight.forEach(item => {
//   gsap.fromTo(item, { x: 500, opacity: 1 }, {
//     opacity: 1, x: 0,
//     scrollTrigger: {
//       trigger: item,
//       start: 'top bottom+=700',
//       end: 'top top+=1100',
//       scrub: true,
//       once: true,
//     }
//   }
//   )
// })
