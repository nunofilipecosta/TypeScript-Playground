class Engine {
    constructor(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    start(callback) {
        window.setTimeout(() => { callback(true, this.engineType); }, 1000);
    }
    stop(callback) {
        window.setTimeout(() => { callback(true, this.engineType); }, 1000);
    }
}
class Auto {
    // More fields
    constructor(data) {
        this.engine = data.engine;
        this.basePrice = data.basePrice;
    }
}
//# sourceMappingURL=IEngine.js.map