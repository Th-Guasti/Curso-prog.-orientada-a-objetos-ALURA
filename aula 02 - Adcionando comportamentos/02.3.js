/*
02. Adicionando comportamentos - 02.3 - Atributos Privados
*/

class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    #saldo = 0;

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            // console.log(this.#saldo);
        } else {
            this.#saldo = "Você não possui o dinheiro suficiente para efetuar o saque!";
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
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
contaCorrentePaulo.agencia = 1001;

contaCorrentePaulo.depositar(100);
contaCorrentePaulo.depositar(100);
contaCorrentePaulo.depositar(100);
contaCorrentePaulo.sacar(50);

console.log(contaCorrentePaulo);