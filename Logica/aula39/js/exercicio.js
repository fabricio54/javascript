// escreva uma função que recebe 2 números e retorne o maior deles
function maior(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

const n1 = Number(prompt("Informe um número: "));
const n2 = Number(prompt("Informe outro número: "));


alert(`O maior número informado foi ${maior(n1, n2)}`);