"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = exports.AccountType = void 0;
var AccountType;
(function (AccountType) {
    AccountType[AccountType["CurrentAccount"] = 0] = "CurrentAccount";
    AccountType[AccountType["SavingAccount"] = 1] = "SavingAccount";
    AccountType[AccountType["EnterpriseAccount"] = 2] = "EnterpriseAccount";
})(AccountType || (exports.AccountType = AccountType = {}));
var Account = /** @class */ (function () {
    //constructor(id:number=1,balance:number=0,type:AccountType=AccountType.CurrentAccount,creationDate:Date=new Date()){
    function Account(id, balance, type, creationDate) {
        if (creationDate === void 0) { creationDate = new Date(); }
        this.id = id;
        this.balance = balance;
        this.type = type;
        this.creationDate = creationDate;
    }
    Object.defineProperty(Account.prototype, "AccountBalance", {
        //define getters and setters
        get: function () {
            return this.balance;
        },
        set: function (value) {
            this.balance = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "AccountId", {
        get: function () {
            return this.id;
        },
        set: function (value) {
            this.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "AccountType", {
        get: function () {
            return this.type;
        },
        set: function (value) {
            this.type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "AccountCreationDate", {
        get: function () {
            return this.creationDate;
        },
        set: function (value) {
            this.creationDate = value;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
exports.Account = Account;
