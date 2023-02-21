"use strict";
/**
 * Title: person.class.ts
 * Author: Chad ONeal
 * Date: 01/03/2023
 * Description: Person class that implements a Person interface
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let myName = new Person("Chad", "ONeal");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
