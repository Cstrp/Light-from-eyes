import './index.scss'

const colors: Array<string> = [
  'red',
  'green',
  'blue',
  'yellow',
  'black',
  'pink',
  'orange',
  'purple']

function RedButton () {
  const button = document.createElement('button')
  button.classList.add('RedBtn')
  button.innerHTML = '000'
  document.body.append(button)
  button.addEventListener('click', () => {
    block()
  })
}

function block () {
  const arr = []
  for (let i = 0; i < 24; i++) {
    const container = document.createElement('div')
    container.classList.add('block')
    container.style.backgroundColor = colors[Math.floor(
      Math.random() * colors.length)]
    arr.push(container)
  }
  arr.forEach(item => {
    document.body.append(item)
  })
}

function filterColor () {
  const input = document.createElement('input')
  input.classList.add('input')
  document.body.append(input)
}

filterColor()
RedButton()



