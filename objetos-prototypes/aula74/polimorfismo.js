// Superclass

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    try {
        if(this.saldo < valor) {
            throw new ReferenceError('Saldo insuficiente');
        }
        this.saldo -= valor;
    }catch(e) {
        console.log(e);
    }
    return;
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(
        `Ag/c: ${this.agencia}|${this.conta} ` +
        `Saldo: R$ ${this.saldo.toFixed(2)}`);
};


function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

// sobrescrevendo o método sacar 
ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {

    }

    this.saldo -= valor;
    this.verSaldo();
}

// linkando o prototype das contas 
ContaCorrente.prototype = Object.create(Conta.prototype);
// definindo o construtor de conta corrente
ContaCorrente.prototype.constructor = ContaCorrente;

const contaCorrent = new ContaCorrente(11, 22,  0, 100);
contaCorrent.depositar(10);

contaCorrent.sacar(90);

