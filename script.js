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

//Criando ordem aleatorio de cores
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


// Acende a próxima cor
let corClara = (Element, Number) => {
    Number = Number * 500;
    setTimeout(() => { // espera  o tempo passar
        Element.classList.add('selected'); // vai add uma classe no selected 

    }, Number - 250);
    setTimeout(() =>{
        Element.classList.remove('selected');
    });
}

// Variavel para comparar seu eu cliquei certo, com as cores que o jogo me retornou 
let checarOrdem = () => {
    for(let i in ordemClicada){
        if(ordemClicada[i] !=ordem[i]){ // compração se ordem clicada for diferente de ordem na posição i Rodar nova função
            perdeuOJogoRapaz();
            break;


        }
    }
    if(ordemClicada.length == ordem.length){ // Comparação se o valor é o mesmo
        alert(`Pontuação ${score}\n Você ganhou`);
        nivelSeguinte();

    }
}

// função para ver o clique do usuário
let clicar = (color) => {
    ordemClicada[ordemClicada.length] = color;
    criarElemento(color).classList.add('selected');

    setTimeout(() => {
        criarElemento(color).classList.remove('selected');
        
    checarOrdem();
    }, 250);

}

// cirar a função que retona a cor

let criarElemento = (color) => {
 if(color == 0){// se color for igual a 0, retornar verde
     return verde;
 } else if (color == 1) {
     return vermelho;     
 } else if(color == 2) {
     return amarelo;
 }  else if(color == 3){
     return azul;
 }
}

// função para o proximo nivel

let nivelSeguinte = () => {
    score++;
    selecionarOrdem();
    
}


// Caso jogador perder o jogo 

let perdeuOJogoRapaz = () => {
    alert(`Pontuação: ${score},/n Você perder, recomece`);
    ordem = [];
    elecionarOrdem();

    iniciarJogo();
}


// Função iniciar o jogo 
let iniciarJogo = () => {
    alert('Bem vindo ao Jogo, bora jogar');
    score= 0;

    nivelSeguinte();
     
}

// ativar os cliques das cores

verde.addEventListener('click', clicar(0));
vermelho.addEventListener('click', clicar(1));
amarelo.addEventListener('click', clicar(2));
azul.addEventListener('click', clicar(3));

iniciarJogo();


