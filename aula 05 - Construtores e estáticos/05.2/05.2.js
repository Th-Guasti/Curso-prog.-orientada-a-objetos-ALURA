/*
05. Adicionando comportamentos - 05.2 - Construtores
*/

import {Cliente} from "./Clientes.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Paulo", 11122233344);
const cliente2 = new Cliente("Samir", 55566677788);

// cliente2.cpf = -1 DÁ ERRO POR POSSUIR O GET

const contaCorrentePaulo = new ContaCorrente(1001, cliente1);
contaCorrentePaulo.depositar(500);

const conta2 = new ContaCorrente(102, cliente1);

let valor = 200;
contaCorrentePaulo.transferir(valor, conta2);