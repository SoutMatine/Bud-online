document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const textSplit = document.querySelectorAll("[text-split]");
  const wordsSlideUp = document.querySelectorAll("[words-slide-up]");
  const wordsRotateIn = document.querySelectorAll("[words-rotate-in]");
  const wordsSlideFromRight = document.querySelectorAll(
    "[words-slide-from-right]",
  );
  const wordsSlideFromTop = document.querySelectorAll("[words-slide-from-top]");
  const lettersSlideUp = document.querySelectorAll("[letters-slide-up]");
  const lettersSlideDown = document.querySelectorAll("[letters-slide-down]");
  const lettersFadeIn = document.querySelectorAll("[letters-fade-in]");
  const lettersFadeInRandom = document.querySelectorAll(
    "[letters-fade-in-random",
  );
  const scrubEachWord = document.querySelectorAll("[scrub-each-word]");

  gsap.set(textSplit, { opacity: 1 });

  textSplit.forEach((e) => {
    new SplitType(e, {
      types: "words, chars",
      tagName: "span",
    });
  });

  wordsSlideUp.forEach((e) => {
    let tl = gsap.timeline({ paused: true });
    const customDelay = e.dataset.delay ? parseFloat(e.dataset.delay) : 0;
    const customDuration = e.dataset.duration ? parseFloat(e.dataset.duration) : 0.5;
    tl.from(e.querySelectorAll(".word"), {
      opacity: 0,
      yPercent: 100,
      duration: customDuration,
      ease: "black.out(2)",
      stagger: { amount: 0.5 },
      delay: customDelay,
    });
    createScrollTrigger(e, tl);
  });

  wordsRotateIn.forEach((e) => {
    let tl = gsap.timeline({ paused: true });
    const customDelay = e.dataset.delay ? parseFloat(e.dataset.delay) : 0;
    const customDuration = e.dataset.duration ? parseFloat(e.dataset.duration) : 0.6;

    tl.set(e.querySelectorAll(".word"), {
      transformPerspective: 1000,
    });
    tl.from(e.querySelectorAll(".word"), {
      rotationX: -90,
      duration: customDuration,
      ease: "power2.out",
      stagger: { amount: 0.6 },
      delay: customDelay,
    });
    createScrollTrigger(e, tl);
  });

  wordsSlideFromRight.forEach((e) => {
    let tl = gsap.timeline({ pasued: true });
    const customDelay = e.dataset.delay ? parseFloat(e.dataset.delay) : 0;
    const customDuration = e.dataset.duration ? parseFloat(e.dataset.duration) : 0.6;

    tl.from(e.querySelectorAll(".word"), {
      opacity: 0,
      x: "1em",
      duration: customDuration,
      ease: "power2.out",
      stagger: { amount: 0.2 },
      delay: customDelay,
    });
    createScrollTrigger(e, tl);
  });

  wordsSlideFromTop.forEach((e) => {
    let tl = gsap.timeline({ pasued: true });
    const customDelay = e.dataset.delay ? parseFloat(e.dataset.delay) : 0;
    const customDuration = e.dataset.duration ? parseFloat(e.dataset.duration) : 0.6;

    tl.from(e.querySelectorAll(".word"), {
      opacity: 0,
      y: "-1em",
      duration: customDuration,
      ease: "power2.out",
      stagger: { amount: 0.2 },
      delay: customDelay,
    });
    createScrollTrigger(e, tl);
  });

  lettersSlideUp.forEach((e) => {
    let tl = gsap.timeline({ paused: true });
    const customDelay = e.dataset.delay ? parseFloat(e.dataset.delay) : 0;
    const customDuration = e.dataset.duration ? parseFloat(e.dataset.duration) : 0.2;

    tl.from(e.querySelectorAll(".char"), {
      yPercent: 100,
      duration: customDuration,
      ease: "power1.out",
      stagger: { amount: 0.6 },
      delay: customDelay,
    });
    createScrollTrigger(e, tl);
  });

  lettersSlideDown.forEach((e) => {
    let tl = gsap.timeline({ paused: true });
    const customDelay = e.dataset.delay ? parseFloat(e.dataset.delay) : 0;
    const customDuration = e.dataset.duration ? parseFloat(e.dataset.duration) : 0.3

    tl.from(e.querySelectorAll(".char"), {
      yPercent: -120,
      duration: customDuration,
      ease: "power1.out",
      stagger: { amount: 0.7 },
      delay: customDelay,
    });
    createScrollTrigger(e, tl);
  });

  lettersFadeIn.forEach((e) => {
    let tl = gsap.timeline({ paused: true });
    const customDelay = e.dataset.delay ? parseFloat(e.dataset.delay) : 0;
    const customDuration = e.dataset.duration ? parseFloat(e.dataset.duration) : 0.2

    tl.from(e.querySelectorAll(".char"), {
      opacity: 0,
      duration: customDuration,
      ease: "power1.out",
      stagger: { amount: 0.8 },
      delay: customDelay,
    });
    createScrollTrigger(e, tl);
  });

  lettersFadeInRandom.forEach((e) => {
    let tl = gsap.timeline({ paused: true });
    const customDelay = e.dataset.delay ? parseFloat(e.dataset.delay) : 0;
    const customDuration = e.dataset.duration ? parseFloat(e.dataset.duration) : 0.1

    tl.from(e.querySelectorAll(".char"), {
      opacity: 0,
      duration: customDuration,
      ease: "power1.out",
      stagger: { amount: 0.1, from: "random" },
      delay: customDelay,
    });
    createScrollTrigger(e, tl);
  });

  scrubEachWord.forEach((e) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: e,
        start: "top 90%",
        end: "top center",
        scrub: true,
      },
    });
    const customDelay = e.dataset.delay ? parseFloat(e.dataset.delay) : 0;
    const customDuration = e.dataset.duration ? parseFloat(e.dataset.duration) : 0.2

    tl.from(e.querySelectorAll(".word"), {
      opacity: 0.2,
      duration: customDuration,
      ease: "power1.out",
      stagger: { each: 0.4 },
      delay: customDelay,
    });
  });

  function createScrollTrigger(triggerElement, timeline) {
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0).pause();
      },
    });
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 80%",
      onEnter: () => timeline.play(),
    });
  }
});
