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
    let cpfParcial = this.cpfLimpo.slice(0, -2);
    console.log(cpfParcial);
    const digitoUm = this.criaDigito(cpfParcial);
    cpfParcial = this.cpfLimpo.slice(0, -1);
    console.log(cpfParcial);
    const digitoDois = this.criaDigito(cpfParcial);
    console.log(digitoUm, digitoDois);
    const cpfEvalido = this.cpfValidade(digitoUm, digitoDois, this.cpfLimpo);
    return cpfEvalido ? 'Cpf válido' : 'Cpf inválido';
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * val);
        regressivo--;
        return ac;
    }, 0);

    let digito = 11 - (total % 11);
    if(digito > 9) {
        digito = 0;
    }

    return digito;
}

ValidaCPF.prototype.cpfValidade = function (digitoUm, digitoDois, cpf) {
    if (digitoUm === Number(cpf[cpf.length - 2]) && digitoDois === Number(cpf[cpf.length - 1])) {
        return true;
    }return false;
}
/*
const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.cpfLimpo);
console.log(cpf.valida());
*/

function iniciar() {

    const textoCpf = document.querySelector('.form');
    textoCpf.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputCpf = document.querySelector('.text-cpf');
        const resultado = document.querySelector('.resultado');
        const cpf = new ValidaCPF(inputCpf.value);
        console.log(inputCpf.value);
        resultado.innerHtml = cpf.valida();
    })
}

iniciar();


