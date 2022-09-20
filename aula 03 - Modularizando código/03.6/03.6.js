/*
03. Adicionando comportamentos - 03.6 - Tipo de valor e tipo de referência

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

let valor = 200;
contaCorrentePaulo.transferir(valor, conta2);

console.log("Valor ", valor);
console.log(conta2);