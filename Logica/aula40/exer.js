// Escreva uma função chamada ePaisagem que receba dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem

//function ePaisagem(altura, largura) {
//    return largura > altura ? true : false;
//}

// função anônima
const largura = 1920;
const altura = 1000;

const imagem = (largura, altura) => largura > altura;

console.log(imagem(2, 3));