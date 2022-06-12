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

type T0 = Exclude<'a' | 'b' | 'c', 'a'>
const a: T0 = 'b'


function block() {
    const arr: Array<HTMLElement> = []
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

function RedButton() {
    const button = document.createElement('button')
    button.classList.add('RedBtn')
    button.innerHTML = '000'
    document.body.append(button)
    button.addEventListener('click', () => {
        block()
    })
}

function filterColor() {
    const input = document.createElement('input')
    input.classList.add('input')
    document.body.append(input)
    // input.addEventListener('input', (evt) => {
    //     block(filterBlock(evt.target.value, colors), result)
    // })
}

filterColor()
RedButton()



