/*
05. Adicionando comportamentos - 05.4 - Atributos estáticos
*/

import { Cliente } from "./Clientes.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Paulo", 11122233344);
const cliente2 = new Cliente("Samir", 55566677788);

// let numeroContas = 0;
const contaCorrentePaulo = new ContaCorrente(1001, cliente1);
// numeroContas++;
contaCorrentePaulo.depositar(500);

const conta2 = new ContaCorrente(102, cliente1);
// numeroContas++;

let valor = 200;
contaCorrentePaulo.transferir(valor, conta2);

console.log(ContaCorrente.numeroContas);