let calc_panel = document.querySelector('.calc_panel').childNodes;

let buttons = [];

for (let i = 1; i < calc_panel.length; i += 2) {
    buttons.push(calc_panel[i])
}

let inputValue = '';

let input = document.getElementById('input');

let reg = /^((\d*\.?\d*)([+-/*]))*(\d*\.?\d*)$/;

buttons.forEach((elem) => {
    elem.addEventListener('click', () => {
        let text = elem.textContent;
        if (text != '='){
            //number or operate
            inputValue += text;
            input.value = inputValue;
            console.log(inputValue);
            return;
        }
        
        //=
        if (inputValue.match(reg).input){
            console.log(inputValue.match(reg).input);
            inputValue += '=' + eval(inputValue);
            input.value = inputValue;
            inputValue = '';
        }
    })
})