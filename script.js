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

    // Criar o for para percorrer o array e executar a função, para acender a cor 
    for(let i in ordem){
        let elementoCor = criarElemento(ordem[i]);
        corClara(elementoCor, NUmber(i) + 1);
    }   
}

let corClara = (Element, Number) => {
    Number = Number * 500;
    setTimeout(() => { // espera  o tempo passar
        Element.classList.add('selected'); // vai add uma classe no selected 

    }, Number - 250);
    setTimeout(() =>{
        Element.classList.remove('selected');
    });
}