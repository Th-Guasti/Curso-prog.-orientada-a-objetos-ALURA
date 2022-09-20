/*
03. Adicionando comportamentos - 03.2 - Modulos JavaScript
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

contaCorrentePaulo.depositar(-100);
contaCorrentePaulo.depositar(100);
contaCorrentePaulo.depositar(100);

const valorSacado = contaCorrentePaulo.sacar(50);
console.log(valorSacado);

console.log(contaCorrentePaulo);