/**
 * Title: person.class.ts
 * Author: Chad ONeal
 * Date: 01/03/2023
 * Description: Person class that implements a Person interface 
 */

import { IPerson } from "./person.interface";

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Chad", "ONeal");

console.log(`My name is ${myName.firstName} ${myName.lastName}`);