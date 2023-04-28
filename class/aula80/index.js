// Métodos de instâncias e estáticos

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    // método de instância
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar.');
    }
}

const controle = new ControleRemoto('Smartv');

controle.aumentarVolume(); // método da instância 
ControleRemoto.trocaPilha(); // método da classe
console.log(controle);