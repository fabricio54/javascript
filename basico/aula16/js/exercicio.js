let numero = prompt("Digite um número: ");
document.body.innerHTML += `<strong>Seu número é ${numero}</strong><br>`;
document.body.innerHTML += `Raiz quadrada: ${numero ** 0.5}<br>`;
document.body.innerHTML += `${numero} é inteiro? ${Number.isInteger(numero)}<br>`;
document.body.innerHTML += `é NaN: ${Number.isNaN(numero)}<br>`;
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}<br>`;
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}<br>`;
document.body.innerHTML += `Com duas casas decimais: ${Math.round(numero)}<br>`;


