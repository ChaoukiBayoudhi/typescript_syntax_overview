import { Account } from "./Account";

export class Client{
    private id:number;
    private name:string;
    private email:string;
    private phone:string;
    private accounts: Set<Account>;
    constructor(id:number, name:string, email:string, phone:string){
        this.id = id;
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.accounts=new Set<Account>();//empty set of accounts
    }

    //getters and setters
    public get Id():number{
        return this.id;
        }
    public set Id(value:number){
        this.id=value;
        }
        public get Name():string{
            return this.name;
            }
    addAccount(account:Account):boolean{
        //verify if the account already exist
        let i:number=0;
        const iterator=this.accounts.values();
        let found=iterator.next();
        while(!found.done){
            if(found.value.AccountId===account.AccountId){
                return false;
            }
            found=iterator.next();
        }
        this.accounts.add(account);
        return true;
    }
}