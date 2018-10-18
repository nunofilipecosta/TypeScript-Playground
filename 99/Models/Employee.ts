import { IEmployee } from "./IEmployee"

export class Employee implements IEmployee {
    name: string;
    age: number;

    private _title: string;
    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value.toUpperCase();
    }
}





