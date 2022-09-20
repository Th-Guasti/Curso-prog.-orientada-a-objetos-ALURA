/*
03. Adicionando comportamentos - 03.5 - Composição de classes
*/
import {Cliente} from "./Clientes.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Paulo";
cliente1.cpf = 11122233344;

const cliente2 = new Cliente();
cliente2.nome = "Samir";
cliente2.cpf = 55566677788;

const contaCorrentePaulo = new ContaCorrente();
contaCorrentePaulo.agencia = 1001;
contaCorrentePaulo.cliente = cliente1;
contaCorrentePaulo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrentePaulo.transferir(200, conta2);

console.log(conta2);
console.log(contaCorrentePaulo);