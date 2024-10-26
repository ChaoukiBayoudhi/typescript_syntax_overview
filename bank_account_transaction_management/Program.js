"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bank_1 = require("./Bank");
var Client_1 = require("./Client");
var Account_1 = require("./Account");
//create Bank
var bank = new Bank_1.Bank("UIB Bank");
//create user
var client = new Client_1.Client(1, 'Mohamed Bayoudhi', 'mohamed.bayoudhi@mcba.tn', '22334455');
//add account
var account = new Account_1.Account(11, 50000, Account_1.AccountType.CurrentAccount);
console.log(client.addAccount(account));
//add account
bank.addClient(client);
