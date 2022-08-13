const animatedScrollObserver = new IntersectionObserver(

  (entries, animatedScollObserver) => {

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter')
        animatedScollObserver.unobserve(entry.target)
      }
    })
  }
)


export const bart = (el, binding) => {

  console.log(binding);
  el.classList.add('before-enter')
  animatedScrollObserver.observe(el)

}