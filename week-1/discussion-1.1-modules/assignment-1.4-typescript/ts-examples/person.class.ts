/**
 * Title: person.class.ts
 * Author: Chad ONeal
 * Date: 01/03/2023
 * Description: Person class that implements a Person interface 
 */


// import statement
import { IPerson } from "./person.interface";

// implementation statement and naming of strings
class Person implements IPerson {
    firstName: string;
    lastName: string;

    // constructor for 1st & last name
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
// myName variable declared
let myName = new Person("Chad", "ONeal");

// logs output to the console 
console.log(`My name is ${myName.firstName} ${myName.lastName}`);