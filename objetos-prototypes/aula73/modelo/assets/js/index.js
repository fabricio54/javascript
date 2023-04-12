function CPF () {
    return {
        cpf: document.querySelector('.text-cpf'),

        digitandoCpf() {
            this.cpf.addEventListener('keypress', e => {
                if(this.comparaTeclas(event.keyCode)) {
                    this.inseriCaracter();
                }
            })
        },

        comparaTeclas(num) {
           const numeros = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

           for(let numero of numeros){
                if(num === numero) {
                    return true;
                }
           }return false;
        },

        inseriCaracter() {
            if(this.cpf.value.length === 3){
                this.cpf.value += '.';
            }else if(this.cpf.value.length === 7){
                this.cpf.value += '.'
            }else if(this.cpf.value.length === 11){
                this.cpf.value += '-';
            }else if(this.cpf.value.length === 14) {
                console.log(this.eValido());
            }
        },

        eValido() {
            const numeroCpf = this.pegandoSoNumero(this.cpf.value.slice(0, this.cpf.length));
            console.log(numeroCpf);
            const digitoUm = this.primeiroDigito(numeroCpf.slice(0, numeroCpf.slice(0, numeroCpf.length)));
            console.log(digitoUm);
            const digitoDois = this.segundoDigito(numeroCpf.slice(0, numeroCpf.length));
            return Number(numeroCpf[9]) === digitoUm && Number(numeroCpf[10]) === digitoDois ? 'cpf válido': 'cpf inválido';
        },

        pegandoSoNumero(cpf) {
            const numero = cpf.replace(/\D/g, '');
            return numero.split('');
        },

        primeiroDigito(cpf) {
            cpf.pop();
            cpf.pop();
            let total = 0;
            let cont = 0;
            let cont2 = 2;
            console.log(cpf[cont2]);
            while(cont < 9) {
                total += Number(cpf[cont]) * cont2;
                console.log(total);
                cont++;
                cont2++;
            }
            return 11 - (total % 11);
        },

        segundoDigito(cpf) {
            cpf.pop();
            cpf = Number(cpf);
            const cpf13 = cpf.filter(valor => valor);
            let total = 0;
            let cont = 11;
            let cont2 = 0;
            while(cont > 1) {
                total += cont * cont2;
                cont--;
                cont2++;
            }
            return 11 - (total % 11);
        }
    }
}

const cpf = CPF();
cpf.digitandoCpf();




