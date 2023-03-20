function criaCalculadora() {
    return {

        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.precionaEnter();
        },

        precionaEnter() {
            // evento de apertar e soltar a tecla
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteUn() {
            // retorna tamanho da string menos um
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            // tratamento de erros
            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return; 
                }
            this.display.value = String(conta);
            }
            catch(e) {
                alert('Conta inválida');
                return;
            }
            
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e){
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    // passando o texto do elemento que foi clicado
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.deleteUn();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            // aqui teriamos um problema a qual o this dentro do escopo dessa função é o ducument mais corrigimos ao usar uma função do java script passando o parâmetro this
            }.bind(this));
        },

        btnParaDisplay(valor) {
            // pegaremos o valor da qual o elemento foi clicado e adicionamos a classe display
            this.display.value += valor;
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();
