import './view/styles/index.scss'

function headerActive() {
  const header = document.querySelector('.header')
  window.onscroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('active')
    } else {
      header.classList.remove('.active')
    }
  }
}

headerActive()

const burgerMenu = document.querySelector('.header__nav-mobile')
const burgerBtn = document.querySelector('.header__nav_mobile-menu')
burgerBtn.addEventListener('click', (evt) => {
  burgerBtn.classList.toggle('active')
  burgerMenu.classList.toggle('active')
})
