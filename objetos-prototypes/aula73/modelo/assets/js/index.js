function CPF () {
    return {
        cpf: document.querySelector('text-cpf'),

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
            if(this.cpf.value.lenght === 3) {
                this.cpf.innerHTML += '.';
                console.log(cpf.value);
            }else if(this.cpf.value.lenght === 8){
                this.cpf.innerHTML+= '.';
                console.log(cpf.value);
            }else if(this.cpf.value.lenght === 12) {
                this.cpf.innerHTML += '-';
                console.log(cpf.value);
            }
        }
    }
}

const cpf = CPF();
cpf.digitandoCpf();



