"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shelf {
    constructor() {
        this._items = new Array();
    }
    add(item) {
        this._items.push(item);
    }
    getFirst() {
        return this._items[0];
    }
}
exports.default = Shelf;
//# sourceMappingURL=shelf.js.map