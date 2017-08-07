var Quarter = (function () {
    function Quarter() {
        this.value = .25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}());
/// <reference path="coin.ts" />
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.acceptedCoins = [new Quarter()];
        this.cells = ([]);
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.Value);
            console.log(_this.paid());
        };
    }
    return VendingMachine;
}());
/// <reference path="vendingMachine.ts" />
/// <reference path="coin.ts" />
var machine = new VendingMachine();
var firstCoin = new Quarter();
console.log();
ko.applyBindings(machine);
var quarterValue = firstCoin.Value;
//# sourceMappingURL=app.js.map