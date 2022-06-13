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

const classColor: Array<string> = [
    'red',
    'green',
    'blue',
    'yellow',
    'black',
    'pink',
    'orange',
    'purple'
]

const container: HTMLElement = document.querySelector('.container')
const blocks = document.querySelector('.block__container')

function block(): void {
    const arr: Array<HTMLElement> = []
    for (let i = 0; i < 24; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        arr.push(block)
    }
    arr.forEach(item => {
        blocks.append(item)
    })
    return arr.forEach((item) => {
        item.classList.add(classColor[[Math.floor(Math.random() * classColor.length)]])
    })
}


function RedButton(): void {
    const button: HTMLButtonElement = document.createElement('button')
    button.classList.add('btn')
    button.innerHTML = 'Create'
    container.append(button)
    button.addEventListener('click', () => {
        block()
    })
}

RedButton()

function form() {
    const input: HTMLInputElement = document.createElement('input')
    input.classList.add('input')

}

function urlParser(url: string): Array<Object> {
    const result = []
    url.split('?')[1].split('&').reduce((acc, item) => {
        const parse = item.split('=')
        acc[parse[0]] = parse[1]
        return result.push(acc)
    }, {})
    return result
}

console.log(urlParser('1'))


// url.split(‘?’)[1]
//     .split(‘&’)
// .reduce((acc, elem) =>{
//     const pair = elem.split(‘=‘)
//     acc[pair[0]] = pair[1]
//     return acc
// }, {})


// function filterColor() {
//     const input = document.createElement('input')
//     input.classList.add('input')
//     document.body.append(input)
// input.addEventListener('input', (evt) => {
//     block(filterBlock(evt.target.value, colors), result)
// })
// }

// filterColor()
// RedButton()



