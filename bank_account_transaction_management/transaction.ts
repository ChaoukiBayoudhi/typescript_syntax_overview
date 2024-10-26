import { Account } from "./Account";

export enum TransactionType{
    deposit,
    withdraw,
    transfer
}
export class Transaction{
    private id:number;
    private type:TransactionType;
    private amount:number;
    private account:Account;
    private toAccount:Account;
    private transactionDate:Date;
    constructor(id:number,type:TransactionType,amount:number,account:Account,toAccount:Account){
        this.id=id;
        this.type=type;
        this.amount=amount;
        this.account=account;
        this.toAccount=toAccount;
        this.transactionDate=new Date();
    }


}