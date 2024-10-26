"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.accounts = new Set(); //empty set of accounts
    }
    Object.defineProperty(Client.prototype, "Id", {
        //getters and setters
        get: function () {
            return this.id;
        },
        set: function (value) {
            this.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Client.prototype.addAccount = function (account) {
        //verify if the account already exist
        var i = 0;
        var iterator = this.accounts.values();
        var found = iterator.next();
        while (!found.done) {
            if (found.value.AccountId === account.AccountId) {
                return false;
            }
            found = iterator.next();
        }
        this.accounts.add(account);
        return true;
    };
    return Client;
}());
exports.Client = Client;
