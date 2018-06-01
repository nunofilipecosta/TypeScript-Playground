namespace funtions {
  interface SquareFunction {
    (x: number): number;
  }

  var squareItBasic = (num: number) => num * num;

  //var squareItInterface: SquareFunction = (num, "dasds") => num * num;

  interface Person {
    name: string;
    age?: number;
    kids: number;
    calcPets: () => number;
    makeYounguer: (years: number) => void;
    greet: (msg: string) => string;
  }

  var p: Person = {
    name: 'Colleen',
    age: 40,
    kids: 4,
    calcPets: function() {
      return this.kids * 2;
    },
    makeYounguer: function(years: number) {
      this.age -= years;
    },
    greet: function(msg: string) {
      return msg + ', ' + this.name;
    }
  };
}
