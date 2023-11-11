console.log('Macacos do artico')

const caixa = document.querySelector ('#caixa');
const button = document.querySelector ('#botao');
const input = document.querySelector ('#caixa-texto');
const lista = document.querySelector ('ol')

button.onclick = function () {
   const item = document.createElement('li');
   if(input.value === '') {
    alert('Caixa de texto vazia');
    return;
   }

   for(let item of lista.childNodes){
    if(item.textContent === input.value){
        alert('esse item já existe');
        return;
    }
   }
   item.textContent = input.value;

   if(lista.childElementCount == 0){
    item.setAttribute('id', 'primeiro_item');
   }
   lista.appendChild(item);

   imput.value = '';
}

caixa.onmouseenter =  (event) => {
    caixa.style.background = 'red';
}

caixa.onmouseout = (event) =>{
    caixa.style.background = 'blue';
}

caixa.onmousedown = (event) => {
    caixa.style.background = 'green';
}

caixa.onmouseup = (event) => {
    caixa.style.background = 'red';
}

caixa.onclick = (event) => {
    caixa.innerText = 'clickou!'
}