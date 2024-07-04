'use strict'
let text = document.getElementById('text');
let splitText = text.innerText.split('');

text.innerHTML = '';
let i = 0
setInterval(AjoutDeLettre, 100 )
function AjoutDeLettre(){
    if(i < splitText.length){
      text.innerHTML += splitText[i];
      i++;
    }
}
console.log(splitText.length)