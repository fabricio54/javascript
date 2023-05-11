export default class Cpf {
    constructor(cpf) {
        //this.cpf = cpf.replace(/\D+/g, '');
        Object.defineProperty(this, 'cpf', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        });
    }

    valida() {
        if(typeof this.cpf === 'undefined') return false;
        if(this.cpf.length !== 11 ) return false;
        let cpfParcial = this.cpf.slice(0, -2);
        const primeiroNum = this.pegaDigito(cpfParcial);
        const segundoNum = this.pegaDigito(cpfParcial + primeiroNum);
        return this.cpf === (cpfParcial + primeiroNum + segundoNum);
    }

    pegaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length+ 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);
        let digito = 11 - (total % 11);
        return digito < 10 ? String(digito): '0';
    }
}

console.log('cheguei ate aqui');