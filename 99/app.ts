import { IEmployee } from './Models/IEmployee';
import { Employee } from './Models/Employee';
import Shelf from './Models/shelf';
import { IResult, Result } from './Models/IResult';




function main() {
    console.log("Hello World");

    var isValid: Boolean = true;
    var name: string = "John Doe";
    var age: number = 40;
    var hobbies: Array<String> = ["Sports", "TV Shows", "Travelling"];

    let value: any = 5;
    let fixedString: string = (<number>value).toFixed(4);
    console.log(fixedString); // 5.0000

    let fixedString2: string = (value as number).toFixed(4);
    console.log(fixedString2); // 5.000

    // let playerName: string;
    // playerName = null;
    // console.log(playerName);

    let playerName2: string | null;
    playerName2 = null;
    console.log(playerName2);

    let h1: HTMLElement | null = document.getElementById('pageTitle');
    h1!.innerText = 'Hello Typescript';

}

function dullFunc(value1: number, value2: string) {
    return "I'm a boring function";
}

function funFunc(score: number, message?: string): string {
    return "I'm a fun function";
}

dullFunc(1, "2");
funFunc(1, "");
funFunc(1);

function sendGreeting(greeting: string = 'Good morning'): void {
    console.log(greeting);
}

function getInputValue(elementId: string): string | undefined {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
    if (inputElement.value === '') {
        return undefined;
    } else {
        return inputElement.value;
    }

}

// let squareit = x => x * x;
// squareit(4); // 16
// let adder = (a, b) => a + b;
// adder(8, 8); // 16
// let greeting = () => console.log('Hello world');
// greeting();

let scores: number[] = [70, 125, 85, 110];
let highScores: number[];
highScores = scores.filter((element, index, array) => {

    console.log(`The value : ${element} is at ${index} position`);

    if (element > 100) {
        return true;
    }
});


let myResult: IResult = new Result();
myResult.playerName = 'nuno';

console.log(myResult.formatName());

console.log(Result.jobDescription);

let employee: IEmployee = new Employee();


function CreateCustomerId(name: string, id: number): string {
    return name + id;
}

let something = function (lastName: string, count: number): string {
    return count + lastName;
}

let anotherFunction: (title: string, ID: number) => string;

anotherFunction = CreateCustomerId;
let f1 = anotherFunction('Nuno', 1);
console.log(f1);

anotherFunction = something;
let f2 = anotherFunction('Costa', 20);
console.log(f2);


let numberShelf: Shelf<number> = new Shelf<number>();
numberShelf.add(1);
numberShelf.add(2);
numberShelf.add(3);
let firstNumber = numberShelf.getFirst();

let stringShelf: Shelf<number> = new Shelf<number>();
stringShelf.add(1);
stringShelf.add(2);
stringShelf.add(3);
let firstString = stringShelf.getFirst();

let x: string | number;
x = 'testing';
if (typeof x === 'string') {
    console.log('string');
} else {
    console.log('number');
}
