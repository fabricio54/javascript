// funções no javascript

// pode ser criado com ou sem parâmetros 
function saudacao(nome){
    //console.log(`bom dia! ${nome}`); não retorna nada
    return `bom dia! ${nome}`; //retorna essa string
}

// função que soma valores
function soma(x = 0, y = 0) { // caso a função não receba parâmetros ele terá os valores que foram definidas como padrões
    return x + y;
}

//saudacao("Fabricio"); retorno ou não dessa função
//const valor = saudacao("Fabricio");
//console.log(valor);

//console.log(soma(2, 3)); // para caso de valores ele retorna a soma

//console.log(soma('x', 'y')); // para o caso de string ele retorna a concatenação das letras

// outras maneiras de declarar funções

// dentro de uma constante sem definirmos nome
//const raiz = function(n){
//    return n ** 0.5;
//};

//console.log(raiz(12));
//console.log(raiz(48));

// maneira mais moderna de criação de função: eram function

// podemos criar dessa maneira
//const raiz = (n) => {
//    return n ** 0.5;
//};

// ou mais simples ainda
const raiz = n => n ** 0.5;

console.log(raiz(9));

