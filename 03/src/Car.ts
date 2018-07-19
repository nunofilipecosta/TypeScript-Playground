class Car {
  private _engine: string;
  constructor(engine: string) {
    this._engine = engine;
  }

  get engine(): string {
    return this.engine;
  }

  set engine(value: string) {
    if (value == undefined) {
      throw 'Supply an Engine';
    }

    this._engine = value;
  }
}

class Engine {
  constructor(public horsePower: number, public engineType: string) {}
}

class CarV2 {
  private _engine: Engine;
  constructor(engine: Engine) {
    this._engine = engine;
  }
}

var engine = new Engine(300, 'V8');
var car = new CarV2(engine);
