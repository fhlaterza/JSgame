//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let numerossorteados=[];
let numeroLimite=10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMsgInicial();


function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML=texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
function exibirMsgInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        let SouPonto = tentativas > 1 ? 's!' : '!';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} tentativa${SouPonto}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //exibirTextoNaTela('h1','Foi por pouco!!');
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p','Seu número é Maior que o número Secreto');
        } else {
            exibirTextoNaTela('p','Seu número é menor que o número secreto');
        }
        tentativas++;
        limparCampo();
        }
    }
function gerarNumeroAleatorio() {
    //return parseInt(Math.random() * 10 +1);
    let numeroescolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeElementosNaLista = numerossorteados.length;
    if (quantidadeElementosNaLista == numeroLimite) {
        numerossorteados = [];
    }
    if (numerossorteados.includes(numeroescolhido)) {
        return gerarNumeroAleatorio(); 
    } else
        numerossorteados.push(numeroescolhido);
        return numeroescolhido;
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value='';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1 ;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}