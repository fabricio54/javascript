function Calculadora() {

    let display = document.querySelector('.display');

    this.iniciaCalculadora = () => {
        this.clickbotoes();
    }

    this.clickbotoes = () => {
        /*
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')){
                //this.btnParaDisplay(el.innerText);
                this.display.value += el.innerText;
            }
        });
        */
       console.log(this.display.value);
    }

    //this.btnParaDisplay = (valor) => {
        //this.display.value += valor;
    //}
}

const calculadora = new Calculadora();
calculadora.iniciaCalculadora();
