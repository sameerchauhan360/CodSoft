let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let clickSound = new Audio('click.mp3')
let string = "";
let arr = '%/*-+';

Array.from(buttons).forEach(button => {
    button.addEventListener('click', e => {
        clickSound.play();
        if (e.target.innerHTML == 'AC') {
            string = '';
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, string.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else {
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})