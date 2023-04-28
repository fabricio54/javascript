// herança nas classes
class DispositivoEletrônico {

    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado){
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(this.ligado) {
            console.log(this.nome + 'já desligado');
            return;
        }

        this.ligado = true;
    }
}

const d1 = new DispositivoEletrônico('Smartphone');
d1.ligar();
d1.ligar();
d1.desligar();
console.log(d1);

// herdando da classe acima com a palavra chave extends
class Smartphone extends DispositivoEletrônico {
    constructor(nome, cor, modelo) {
        super(nome); // chamando o construtor da classe pai
        this.cor = cor;
        this.modelo = modelo;
    }
};

const s1 = new Smartphone('iPhone', 'Preto', 'Galaxy S10');

console.log(s1);
