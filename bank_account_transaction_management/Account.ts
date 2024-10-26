export enum AccountType{
    CurrentAccount,
    SavingAccount,
    EnterpriseAccount
}
export class Account{
    private id: number;
    private balance: number;
    private type:AccountType;
    private creationDate:Date;
    //constructor(id:number=1,balance:number=0,type:AccountType=AccountType.CurrentAccount,creationDate:Date=new Date()){
    constructor(id:number,balance:number,type:AccountType,creationDate:Date=new Date()){
        this.id=id;
        this.balance=balance;
        this.type=type;
        this.creationDate=creationDate;
}
    //define getters and setters
    get AccountBalance(): number {
        return this.balance;
    }
    set AccountBalance(value: number) {
        this.balance = value;
    }
    get AccountId(): number {
        return this.id;
    }
    set AccountId(value: number) {
        this.id = value;
    }
    get AccountType(): AccountType {
        return this.type;
    }
    set AccountType(value: AccountType) {
        this.type = value;
    }
    get AccountCreationDate(): Date {
        return this.creationDate;
    }
    set AccountCreationDate(value: Date) {
            this.creationDate = value;
    }

}