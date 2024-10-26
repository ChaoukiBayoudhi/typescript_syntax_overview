"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
var Bank = /** @class */ (function () {
    function Bank(name) {
        this.name = name;
        this.clients = new Map();
    }
    Bank.prototype.addClient = function (client) {
        this.clients.set(client.Id, client);
    };
    return Bank;
}());
exports.Bank = Bank;
