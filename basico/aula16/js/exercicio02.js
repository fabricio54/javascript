const numero = Number(prompt("Digite um número: "));
// observação: para selecionarmos um id em um docomento html utilizamos essa notação. observação: método do objeto window do navegador
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML = `<p>Seu número é ${numero}</p> <p>Raiz Quadrada: ${numero ** 0.5}</p> <p>${numero} é inteiro? ${Number.isInteger()}</p> <p>Arredondando para baixo: ${Math.floor(numero)}</p> <p>Arredondando para cima: ${Math.ceil(numero)}</p> <p>com duas casas decimais: ${numero.toFixed(2)}</p>`;