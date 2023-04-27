// validando cpf
/* 705.484.450-52 070.987.720-03
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0

11 - (237 % 11) = 5 (Primeiro digito)
se o digito for maior que 9 considera 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10

11 - (284 % 11) = 2 (Segundo digito)
*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11 ) return false;
    if(this.isSequencia()) return false;
    let cpfParcial = this.cpfLimpo.slice(0, -2);
    console.log(cpfParcial);
    const digitoUm = this.criaDigito(cpfParcial);
    const digitoDois = this.criaDigito(cpfParcial + digitoUm);
    const novoCpf = cpfParcial + digitoUm + digitoDois;
    return novoCpf === cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    let digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}
/*
const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.cpfLimpo);
console.log(cpf.valida());
*/

ValidaCPF.prototype.isSequencia = function() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length + 1) === this.cpfLimpo;
};

const cpfUsuario = document.querySelector('.cpf').value;

document.addEventListener('submit', e => {
  e.preventDefault();
  const cpf = ValidaCPF(cpfUsuario);
  prompt(cpf.valida());
});


