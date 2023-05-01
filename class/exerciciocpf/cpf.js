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

class Cpf {
    constructor(cpf) {
        this.cpf = cpf.replace(/\D+/g, '');
    }

    valida() {
        if(typeof this.cpf === 'undefined') return false;
        if(this.cpf.length !== 11 ) return false;
        let cpfParcial = this.cpf.slice(0, -2);
        console.log(cpfParcial);
        const primeiroNum = this.pegaDigito(cpfParcial);
        //const segundoNum = this.pegaDigito(cpfParcial + primeiroNum);
    }

    pegaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        console.log(cpfArray);
        let regressivo = cpfArray.lenght + 1;
        const total = cpfArray.reduce((ac, val) => {
            console.log(ac, val);
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);

    }
}

const cpf = new Cpf('705.484.450-52');

cpf.valida();