Answer = new Array();
function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
function integer() {
    screen.value = screen.value * -1;
}
function percentage() {
    screen.value = eval(screen.value) / 100;
}
function ans() {
    screen.value = Answer[Answer.length - 1];
}
function calculate() {
    screen.value = eval(screen.value);
    Answer.push(screen.value);
}

var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.cal_btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.value;
        screen.value += btntext;
    });
}