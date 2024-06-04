
let contador=0;
function alterarStatus(gameId) {
    const gameItem = document.getElementById(`game-${gameId}`);
    const button = gameItem.querySelector('.dashboard__item__button');
    if (button.innerText == "Alugar") {
        button.innerText = "Devolver";
        button.classList.add('dashboard__item__button--return');
        gameItem.querySelector('.dashboard__item__img').classList.add('dashboard__item__img--rented');
        
    } 
    else 
    {
        confirm("O jogo foi realmente devolvido?")
        button.innerText = "Alugar";
        button.classList.remove('dashboard__item__button--return');
        gameItem.querySelector('.dashboard__item__img').classList.remove('dashboard__item__img--rented');
    }
    atualizarContador();
}


function atualizarContador() 
{
    let contador = 0;
    const botoes = document.querySelectorAll('.dashboard__item__button');
    
    botoes.forEach((botao) => {
        if (botao.innerText === "Devolver") {
            contador++;
        }
    });
    
    console.log(contador);
}

document.addEventListener('DOMContentLoaded', atualizarContador);


let str= "no";
var re = /[^A-Za-z0-9]/g;
str = str.toLowerCase().replace(re, '');
var len = str.length;
for (var i = 0; i < len/2; i++) {
  if (str[i] !== str[len - 1 - i]) {
      console.log("não palindromo");
  }
  else{
    console.log("palindromo");
    }

}
function Ordenar(x,y,z)
{
    let lista=[x,y,z];
        
    lista.sort((x,y)=>x-y);

    console.log(`Números ordenados: ${lista.join(',')}`);

    

}

Ordenar(15,7,2);