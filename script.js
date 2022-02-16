let ordem = [];
let ordemClicada = [];
let score = [];

// 0 - verde 
// 1 - vermelho 
// 2 - amarelo
// 3 - azul 

const azul = document.querySelector('azul');
const vermelho = document.querySelector('vermelho');
const verde = document.querySelector('verde');
const amarelo = document.querySelector('amarelo');


let selecionarOrdem = () => { //Criando a função 
    let guardarNumero = Math.floor(Math.random() * 4 ); // guarda numero aleatorio a cada rodada - Arredonda o número associado 
    ordem[ordem.length] = guardarNumero; // atribuir a ordem ao proximo numero ,
    ordemClicada = []; //Atribui o indice do arrary com a cor que sai de sorteio
     


}