var Car = /** @class */ (function () {
    function Car(engine) {
        this._engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this.engine;
        },
        set: function (value) {
            if (value == undefined) {
                throw 'Supply an Engine';
            }
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var CarV2 = /** @class */ (function () {
    function CarV2(engine) {
        this._engine = engine;
    }
    return CarV2;
}());
var engine = new Engine(300, 'V8');
var car = new CarV2(engine);
