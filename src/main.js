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
