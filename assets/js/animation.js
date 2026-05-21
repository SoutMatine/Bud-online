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



/* ======================= Completed Works ======================= */

function isFastElement(index) {
  // Позиция в ряду (1-based)
  const position = index + 1;
  // Чётные позиции (2, 4, 6, 8...) - быстрые
  return position % 2 === 0;
}

// Получаем все секции с элементами
const sections = document.querySelectorAll('.different-speed');

sections.forEach((section, sectionIndex) => {
  // Находим все элементы в текущей секции

  const completedWorks = document.querySelectorAll('.completed-work')

  // Помечаем быстрые элементы визуально
  completedWorks.forEach((item, idx) => {
    if (isFastElement(idx)) {
      item.classList.add('fast');
    }
  });

  // Настраиваем анимацию для каждого элемента
  completedWorks.forEach((item, idx) => {
    // Определяем скорость: быстрые элементы (чётные) - в 1.5 раза быстрее
    const speed = isFastElement(idx) ? 1.5 : 1;

    // Создаём анимацию движения
    gsap.to(item, {
      y: 0 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true
      }
    });
  });
});


let itemLeft = gsap.utils.toArray('.grid-line .left-item')
let itemRight = gsap.utils.toArray('.grid-line .right-item')

let item = gsap.utils.toArray('.grid-line')
item.forEach(item => {
  gsap.fromTo(item, { y: 300, opacity: 0.5 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: item,
      start: 'top bottom',
      end: 'top top+=400',
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
      start: 'top bottom',
      end: 'top top+=400',
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
      start: 'top bottom',
      end: 'top top+=400',
      scrub: true,
      once: true
    }
  }
  )
})