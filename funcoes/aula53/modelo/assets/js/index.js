function Calculadora() {

    let display = document.querySelector('.display');

    this.iniciaCalculadora = function () {
        this.clickbotoes();
    }

    this.clickbotoes = function() {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);
            }
        });
    }

    this.btnParaDisplay = function (valor) {
        this.display.value += valor;
    }
}

const calculadora = new Calculadora();
calculadora.iniciaCalculadora();
