// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto'; // dentro do HTML daquele tipo

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10'
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirMensagemInicial();

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    } 

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { // se houver o numero escolhido na lista de numeros sorteados
        return gerarNumeroAleatorio(); // gere outro numero aleatorio
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // joga o numero escolhido p dentro da lista
        console.log(listaDeNumerosSorteados); // imprime a lista os elementos
        return numeroEscolhido;
    }
}


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){ // verifica se o chute é igual ao numeroSecreto
        exibirTextoNaTela('h1', 'Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');


    } else if ( chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor!');
        
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior!');
        tentativas++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}