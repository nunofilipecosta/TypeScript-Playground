interface IEngine {
    start(callback : (startStatus : Boolean, engineType : string) => void) : void;
    stop(callback : (stopStatus : Boolean, engineType : string) => void) : void;
}

interface IAutoOptions {
    engine : IEngine;
    basePrice : number;
    state :string;
    make? : string;
    model? :string;
    year? : number
}

class Engine implements IEngine {
    constructor(public horsePower : number, public engineType : string){}

    start(callback: (startStatus: Boolean, engineType: string) => void): void {
        window.setTimeout(()=> {callback(true, this.engineType)}, 1000);
    }
    stop(callback: (stopStatus: Boolean, engineType: string) => void): void {
        window.setTimeout(()=> {callback(true, this.engineType)}, 1000);
    }
}

class Auto {
    engine : IEngine;
    basePrice : number;
    // More fields

    constructor(data : IAutoOptions) {
        this.engine = data.engine;
        this.basePrice = data.basePrice;
    }
}