let greeting: string;
let userName: string;
let age: number;

// assign value to variable
greeting = 'Hello, ';
userName = 'John Doe';
age = 25;

// Output: My name is John Doe and I am 25 years old.
console.log(greeting + "My name is " + userName + " and I am " + age + " years old.");

// use type for object
interface User {
    name: string;
    age: number;
    gender?: string; // optional property
}

let user1: User;

// assign value to object
user1 = {
    name: 'John Doe',
    age: 25
};

// assign value to object including optional variable
let user3: User;
user3 = {
    name: 'John Doe',
    age: 25,
    gender: "male"
};

// assign value to object with const
const user2: User = {
    name: 'John Doe',
    age: 25
};

// object type variable with const
const user: User = {
    name: 'John Doe',
    age: 25
};

// array of object type variable with const
const users: User[] = [user, user];

// array of object type variable with const more clean
const users1: User[] = [user, user];

