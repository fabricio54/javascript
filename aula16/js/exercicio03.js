const numero = Number(prompt("Informe um número: "));
const title = document.getElementById('content-title');
const text = document.getElementById('content-text');

title.innerHTML = `<strong>${numero}</strong>`;
text.innerHTML = '';
text.innerHTML += `<p>Seu número é ${numero}</p> <p>Raiz Quadrada: ${numero ** 0.5}</p> <p>${numero} é inteiro? ${Number.isInteger(numero)}</p> <p>Arrendondando para baixo ${Math.floor(numero)}</p> <p>Arrendondando para cima: ${Math.ceil(numero)}</p> <p>com duas casas decimais: ${numero.toFixed(2)}</p>`