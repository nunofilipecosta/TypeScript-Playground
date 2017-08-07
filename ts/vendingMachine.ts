/// <reference path="coin.ts" />

class VendingMachine {
    paid = ko.observable(0);
    cells = ko.observableArray([]);

    acceptedCoins: Quarter[] = [new Quarter()];

    

    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);

        console.log(this.paid());
    }
}