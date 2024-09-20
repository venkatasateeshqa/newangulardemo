import { Address } from "./Address";

export class Account {
    name: string;
    mobileNumber: string;
    balance: number;
    pan: string;
    accountNumber: string;
    address:Address

    constructor(name: string, mobileNumber: string, balance: number, 
        pan: string, accountNumber: string,address:Address ){
        this.name=name;
        this.mobileNumber=mobileNumber;
        this.balance=balance;
        this.pan=pan;
        this.accountNumber=accountNumber;
        this.address=address;

    }
    
}