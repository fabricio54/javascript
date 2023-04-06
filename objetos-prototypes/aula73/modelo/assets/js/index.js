function CPF () {
    return {
        cpf: document.querySelector('.text-cpf'),

        digitandoCpf() {
            document.addEventListener('keydown', e => {
                if(this.comparaTeclas(e.keyCode) && e.target.classList.contains('text-cpf')) {
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
                this.eValido();
            }
        },

        eValido() {
            const numeroCpf = this.pegandoSoNumero(this.cpf);
            const digitoUm = primeiroDigito(numeroCpf);
            const digitoDois = segundodigito()

        },

        pegandoSoNumero(cpf) {
            const numero = cpf.value.replace(/\D/g, '');
            return numero;
        },

        primeiroDigito(cpf) {
            cpf.pop();
            cpf.pop();
            const cpf13 = cpf.filter(valor => valor);
            let total = 0;
            let cont = 11;
            let cont2 = 0;
            while(cont > 2) {
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



