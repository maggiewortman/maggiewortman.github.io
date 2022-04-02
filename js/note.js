let myVariable;
myVariable = 'Anthony';

let myVariable2 = 'Peter';

myVariable = 'Celine';

/* This is a
multi-line comment */

// This is a comment

// VARIABLES

let myVariable = 'bob'; // STRINGS

let myNumber = 3; // NUMBERS

let myBoolean = true; //BOOLEANS
let myBoolean = false;

let myArray = [1, 'bob', true]; //ARRAYS

let myObject = document.querySelector('p');
//OBJECTS, BUT ALL THE ABOVE ARE OBJECTS TOO

// OPERATORS

6+9; // ADDITION
'Hello' + 'World' // STRING ADDITION --> 'HelloWorld'

// SUBTRACTION --> -
// MULTIPLICATION --> *
// DIVISION --> /

// ASSIGNMENT --> =

// EQUALITY
myNumber === 4; // <-- This will result in false

// NOT, DOES NOT EQUAL
!(myNumber === 3); //!(TRUE) = NOT TRUE = false
myVariable !== 3; // false

//CONDITIONS

let iceCream = 'chocolate';

if(iceCream === 'chocolate') {
  alert('Yaya, I love chocolate ice cream!');
} else {
  alert('Awww, but chocolate is my favorite...');
}

// EVENT LISTENERS

document.querySelector('html').addEventListener('click',
function() {
  alert('Ouch! Stop poking me!');
});
