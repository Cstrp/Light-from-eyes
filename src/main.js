import './view/styles/index.scss'

const burgerMenu = document.querySelector('.header__nav-mobile')
const burgerBtn = document.querySelector('.header__nav_mobile-menu')
burgerBtn.addEventListener('click', (evt) => {
  burgerBtn.classList.toggle('active')
  burgerMenu.classList.toggle('active')
})

const next = document.querySelectorAll('.intro__next')
const prev = document.querySelectorAll('.intro__prev')
const container = document.querySelectorAll('.intro__wrapper')
const dots = document.querySelectorAll('.dot')
let index = 0

const slider = () => {
  for (let i = 0; i < container.length; i++) {
    // console.log(i)
    container[i].classList.add('active')
  }
  container[index].classList.remove('active')
  for (let i = 0; i < dots.length; i++) {
    if (i === 0 || 3 || 6) {
      dots[i].classList.add('active')
    }
  }
}

// dots.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     btn.classList.add('active')
//   })
//   slider()
// })

// dots[i].className = dots[i].className.replace(" active", "");
// dots[slideIndex-1].className += " active";
next.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (index + 1 === container.length) {
      index = 0
    } else {
      index++
    }
    slider()
  })
})

prev.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (index - 1 === -1) {
      index = container.length - 1
    } else {
      index--
    }
    slider()
  })
})
