let lenis

const contentElements = [...document.querySelectorAll('.content--sticky')]
const totalContentElements = contentElements.length

const initSmoothScrolling = () => {
  lenis = new Lenis({
    lerp: 0.2,
    smoothWheel: true,
  })

  lenis.on('scroll', () => ScrollTrigger.update())

  const scrollFn = (time) => {
    lenis.raf(time)
    requestAnimationFrame(scrollFn)
  }
  requestAnimationFrame(scrollFn)
}

const scroll = () => {
  contentElements.forEach((el, position) => {
    const isLast = position === totalContentElements - 1

    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: 'center center',
          end: '+=100%',
          scrub: true,
        },
      })
      .to(el, {
        ease: 'none',
        scale: 0.6,
        opacity: 0,
        yPercent: isLast ? 125 : 0,
      })
  })
}

const init = () => {
  initSmoothScrolling()
  scroll()
}

const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    )
  })
}

preloadImages('.content__img').then(() => {
  init()
})
