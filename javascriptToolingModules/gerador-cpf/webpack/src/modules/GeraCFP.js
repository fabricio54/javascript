import Cpf from "./Cpf";

export default class GeraCFP {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    geraNovoCpf() {
        const cpfSemDigito = this.rand();
        const digito1 = Cpf.ge
    }
}