```html
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Manipulando el DOM</title>
</head>
<body>

<h1 class="Perro">Manipulando el DOM</h1>
<p>Este es un parrafo</p>
<p class="parrafito">este es un parrafo con clase</p>
<p id="pId">Este es un parrafo con id</p>
<input placeholder="Inserta algo aqui"/>

<script src="main.js"></script>
</body>
</html>

<!-- Forma de trabajar con eventos en html-->
<input id="input2" placeholder="Inserta un numero"/>
<input id="input1" placeholder="Inserta un numero"/>
<button id="btnCalc" onclick="eventOnClick()">Calcular</button>


```
```JS
const h1 = document.querySelector('h1');
const p =document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pId = document.getElementById('pId');
const input = document.querySelector('input');

console.log({h1});
console.log({
    h1,
    p,
    parrafito,
    pId,
    input,
});

h1.innerHTML='patito';//convierte codio a Html
console.log(h1.getAttribute('class'));
input.value = "1234";

//creando html con scripts.
const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/564x/f7/38/69/f73869eed2f9a3b0911d39917fe3c329.jpg')
pId.innerHTML = ""
pId.append(img);

//su manipulacion en js
function eventOnClick(){
    let suma = parseInt(input1.value) + parseInt(input2.value);
    p.innerText = "resultado: " + suma;
}

```