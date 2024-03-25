let name = 'mosh';
console.log(name);


//No reserved keywords
//Should be meaningful
//Cannot start with a number!
//Cannot conmtain Space or -

let firstName = 'JeongYeon';
const lastName = 'Kim';

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
console.log(firstName, lastName)

//Primitive Value Types
//Strings, Numbers, Booleans, Undefined, Null

name = 'caca'; // String Literal
let age = 30; //Numbeer Literal
let isApproved = false; //Boolean Literal
let indefini = undefined; 
let selectedColor = null;



//Reference Types
//Object, Array, Function
//Object has properties (variables)
// { } is consired an OBJECT LITERAL
let person = {
 name: 'Jeongyeon',
 age: 30
};

// Dot Notation - Default Choice. Stick with this if ur shit
person.name = 'Isaac'

console.log(person);
console.log(person.name)

//Bracket Notation - Dont know name of target property 
//until runtime (if its null/undefined at start)
person['name'] = 'Kaka';

console.log(person.name)


//Array for List storage
//IMPORTANT ARRAYS START AT [0] NOT [1] !!! THATS LUA ONLY
let selectedColors = ['red', 'blue', 'green'];
selectedColors[3] = 'Fuck';
console.log(selectedColors);
console.log(selectedColors[0]);
console.log('number of items are'); 
console.log(selectedColors.length);


//FUNCTIONS

function greet() {
 console.log('Hello World');

}

greet();

//We can add inputs to FUNCTIONS
// '+' sign allows to CONCATENATE

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
   
   }
   
   greet('caca');
   greet('pipi', 'Smith');


//Function that calculates a value (maths)
function square(number) {
    return number * number;
}


console.log(square(2));

//Function is a set of statements that either 
//does a set of tasks or calculates a value