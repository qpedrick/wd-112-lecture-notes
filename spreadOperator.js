/* Spread Operator
*
*Essential pulls out all the elements of an array and gives them to you as a stadalone list of items.
*
*Denoted ...
*/

//Incorrect Syntax

const fullName = ["Gary" , "Weston"];

//...fullName
// const elements = ...fullName; //1) looks like
// const elements = "Gary" , "Weston"; //this..

//Correct Syntax

const copiedFullName = [...fullName]
console.log(copiedFullName)

/*

If we inserted fullName variable inside of the array without using the spread syntax, we would just be inserting the array as a whole, as the first index of the new array.
Since the spread syntax actually pulls out all of the elements of an array and gives them back to us as stadalone list of elements, we will have a new array with those stadalone elements inserted.

One of the advantages of the spread operator is that, down the line, if we decide that we need to add (or push) another value to our original array,
we can do that without altering our copied array.  Keep in mind that this is dependent on what data types we're actually working with.
Here, we are pushing a primitive data type, so we don't run into any issues.

*/

fullName.unshift(("Mr. "));
console.log(fullName, copiedFullName)

//Spread Operator & Numbers

/*
JS has a global Math Object that has it's own built in methods, like the min method,
that looks at a list of integers and returns the smallest value.
*/

console.log(Math.min(1,5,-9));

//min will not work on an array, it is expecting a number

const prices = [10.99, 5.99, 3.99, 6.59];
//console.log(Math.min(prices));

/*
This is where the spread operator will come in handy.  We can spread the elements out of the array
*/

console.log(Math.min(...prices))

//Anytime you are working with a function, or a method, that requires a list of stadalone values, the spread operator helps you get these values out of the array.

/*
Spread Operator and Objects
*/

const persons = [{name: "Jerry", age: 37}, {name: "Bob", age: 12}];
const copiedPersons = [...persons]
//console.log(copiedPersons, persons)

persons.push({name: "Ginger", age: 29});

console.log(copiedPersons, persons)

/* This is where it can be a bit tricky behind the scenes
-JS has 5 data types that are passed by value: boolean, null, undefined, string, and number.  There are primitive data types
-If a primitive data type is assigned to a variable, we can think of that variable as containing the primitive value.
*/

let x = 10;
let y = "abc"
let z = null;

/*
variable    value
x           10
y           "abc"
z           null
*/

let a = x;
let b = y;

console.log(x, y, a, b); //10, "abc", 10, "abc"

//Changing one variable does NOT change the other value of the variable as having no relationship to each other.

let x = 10
let y = "abc"

let a = x
let b = y

a = 5
b = "def"

console.log(x,y,a,b) //10 abc 5 def

/* JS also has 3 data types that are passed by reference: array, function, and object.
These are all technically objects, so we'll refer to them collectively as objects.

Variables that are assigned to a non primitive value are given a reference to that value.
The reference points to that object's location in memory.  Variables do not contain the value.

*/

// Challenge:
//Spread operator challenge.
//Without modifying the original two arrays, combine two new arrays into one new array with the spread operator.
//You will see the entire alphabet in ONE single array
const aThroughM = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
const nThroughZ = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const aThroughZ = aThroughM
aThroughM.push(...nThroughZ)
console.log(aThroughZ)

// BREAK

Destructuring Challenge:
// Challenge:
const instruments = {
    guitars: {
        type: [{
            brand: 'Schecter',
            model: 'Demon 8'
        },
        {
            brand: 'Gibson',
            model: 'Les Paul'
        }
    ]
    },
    drums: {
        type: [{
            brand: 'Pearl',
            model: 'Session Studio'
        },
        {
            brand: 'Gretsch',
            model: 'Catalina Maple'
        },
    ]
    }
}
/* ! Bronze
// Declare a variable that contains the guitar and drums object from the instruments object
// in ONE line of code using destructuring.
// console.log it. You should see something like this: [Object, Object][Object, Object]
*/

//const { guitars , drums} = instruments
//console.log(guitars,drums)

// ! Silver
// console.log the brand and model of the FIRST INDEX in type array in the guitar object. You will need to use bracket notation and
// dot notation in combination. Separate them with a space

const {brand , model} = type
const {type} = guitars
console.log(guitars)

// ! Gold
// Create a function the returns true if the brand of the drum object is Pearl and the model is Session Studio,
// if not, return false. console.log it
// Extra credit: write another function without object destructuring that gives the same result!
