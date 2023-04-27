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

const conta = new Conta(11, 22, 50);

console.log(conta);

conta.depositar(200);
conta.sacar(1000);