const verdeCipreste = {
    nome:'Verde-cipreste',
    nomePasta:'imagens-verde-cipreste'
};
const azulInverno = {
    nome:'Azul-inverno',
    nomePasta:'imagens-azul-inverno'
};
const meiaNoite = {
    nome:'Meia-noite',
    nomePasta:'imagens-meia-noite'
};
const estelar = {
    nome:'Estelar',
    nomePasta:'imagens-estelar'
};
const rosaClaro = {
    nome:'Rosa-claro',
    nomePasta:'imagens-rosa-claro'
};
//OPÇÕES DE CORES
const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
//OPCOES DE TAMANHO
const opcaoTamanho =['41mm','45mm'];


//TROCAR MINIATURAS QUANDO TROCADO A COR
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

//PUXAR ID DAS CORES
const nomeCor = document.getElementById('nome-cor-selecionada');
//PUXAR ID DO TITULO
const tituloProduto = document.getElementById('titulo-produto');
//PUXAR ID DA IMAGEM DE VIZUALIZAÇÃO
const imagemVisualização = document.getElementById('imagem-visualizacao');

//MOSTRAR PRO JS QUAL A COR QUE ESTA CHECKED
let corSelecionada = 1;

function trocarCor() {
    //VARIAVEL QUE SELECIONA A OPÇÃO DE COR SELECIONADA E PEGA O PRIMEIRO CARACTERE DO ID DELE
    const corAdd = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);
    corSelecionada = corAdd;
    //TROCA O NOME DA COR EM CIMA DAS OPÇÕES DE CORES
    nomeCor.innerText = `cor- ${opcoesCores[corSelecionada].nome}`;
    //TROCA A COR E O TAMANHO NO TITULO QUANDO MUDAR A COR
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()} para caixa de ${opcaoTamanho[tamanhoSelecionado]}`;

//TROCAR MINIATURAS QUANDO TROCADO A COR
    miniaturaImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePasta}/imagem-0.jpeg`;
    miniaturaImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePasta}/imagem-1.jpeg`;
    miniaturaImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePasta}/imagem-2.jpeg`;
//TROCAR IMAGEM DE VIZUALIÇÃO QUANDO TROCADO A COR
    imagemVisualização.src =`./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePasta}/imagem-${imagemSelecionada}.jpeg`;
}
//OPÇÃO TAMANHOS 

let tamanhoSelecionado = 1;

function trocarTamanho() {
    //atualizar variavel de controle do tamanho da caixa
    const tamanhoAdd = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0);
    tamanhoSelecionado=tamanhoAdd;
    //mudar o titulo do produto
    //mudar o tamanho da imagem de acordo com a opção
    if (tamanhoSelecionado === '0'){
        imagemVisualização.classList.add('caixa-pequena');
        tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()} para caixa de ${opcaoTamanho[tamanhoSelecionado]}`
    } else {
        imagemVisualização.classList.remove('caixa-pequena');
        tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()} para caixa de ${opcaoTamanho[tamanhoSelecionado]}`
    }
}

//OPÇÃO DE IMAGENS
let imagemSelecionada = 1;

function trocarImagem() {
    const imagemAdd = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0);
    imagemSelecionada=imagemAdd;
    imagemVisualização.src =`./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePasta}/imagem-${imagemSelecionada}.jpeg`;

}