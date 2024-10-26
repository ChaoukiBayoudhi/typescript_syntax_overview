import { Client } from "./Client";
export class Bank{
    name:string;
    clients: Map<number,Client>;
    constructor(name:string){
        this.name=name;
        this.clients=new Map();
    }
    public addClient(client:Client):void{
        this.clients.set(client.Id,client);
        }
}