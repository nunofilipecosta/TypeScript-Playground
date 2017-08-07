/// <reference path="vendingMachine.ts" />
/// <reference path="coin.ts" />

var machine = new VendingMachine();
var firstCoin = new Quarter();

console.log()

ko.applyBindings(machine);


var quarterValue = firstCoin.Value