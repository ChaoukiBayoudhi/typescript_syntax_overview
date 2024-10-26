import{Bank} from './Bank';
import{Client} from './Client';
import {Account, AccountType} from './Account';
//create Bank
const bank = new Bank("UIB Bank");
//create user
const client = new Client(1,'Mohamed Bayoudhi','mohamed.bayoudhi@mcba.tn','22334455');
//add account
const account=new Account(11,50000,AccountType.CurrentAccount)
console.log(client.addAccount(account));
//add account
bank.addClient(client);