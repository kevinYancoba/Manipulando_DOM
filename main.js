const h1 = document.querySelector('h1');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btnCalc = document.querySelector('#btnCalc');
const p = document.querySelector('#resultado');
const form = document.querySelector('#form');


form.addEventListener('submit', eventOnClick);
function eventOnClick(event){
    event.preventDefault();
    let suma = parseInt(input1.value) + parseInt(input2.value);
    p.innerText = "resultado: " + suma;
}

