/*
02. Adicionando comportamentos - 02.2 - Comportamentos de classes
*/

class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            // console.log(this.saldo);
        } else {
            this.saldo = "Você não possui o dinheiro suficiente para efetuar o saque!";
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Paulo";
cliente1.cpf = 11122233344;

const cliente2 = new Cliente();
cliente2.nome = "Samir";
cliente2.cpf = 55566677788;

const contaCorrentePaulo = new ContaCorrente();
contaCorrentePaulo.saldo = 0;
contaCorrentePaulo.agencia = 1001;

console.log(contaCorrentePaulo.saldo);

contaCorrentePaulo.saldo = 100;
console.log(contaCorrentePaulo.saldo);

contaCorrentePaulo.sacar(200);
console.log(contaCorrentePaulo.saldo);