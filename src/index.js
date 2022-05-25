import './index.scss';
var colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'black',
    'pink',
    'orange',
    'purple'
];
function RedButton() {
    var button = document.createElement('button');
    button.classList.add('RedBtn');
    button.innerHTML = '000';
    document.body.append(button);
    button.addEventListener('click', function () {
        block();
    });
}
function block() {
    var arr = [];
    for (var i = 0; i < 24; i++) {
        var container = document.createElement('div');
        container.classList.add('block');
        container.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        arr.push(container);
    }
    arr.forEach(function (item) {
        document.body.append(item);
    });
}
function filterColor() {
    var input = document.createElement('input');
    input.classList.add('input');
    document.body.append(input);
}
filterColor();
RedButton();
