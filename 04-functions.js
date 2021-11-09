// Functions

/*
    Function is a block of reusable code that can take in parameters (door), perform an action, and return the result.
    There are two types of functions:
        - function declaration
            - are hoisted
        - function expression
            - arrow function
            - are NOT hoisted
    Functions have a default return statement of undefined unless otherwise specified.
*/

/*
    function identifier(parameters_if_any) {
        block of code to run
        return statement
    }
*/

function funDeclaration() {
    // console.log("This is a function declaration")
    return "This is a function declaration's return statement"
}

// Function will not run until it is invoked (called)
// Parentheses immediately invoke the function

funDeclaration()  // Will not show until wrapped in console.log()

let funResult = funDeclaration()

console.log(funResult)

// Functions can have none or many parameters
// Parameters act as doors to let arguments inside of a function

function greetUser(fullName) {
    return `Good day, ${fullName}`
}

console.log(greetUser())
// returns undefined because no parameter is given.
console.log(greetUser("Kiersten"))
// returns 'Good Day, Kiersten' because we gave the parameter a string argument of "Kiersten"

let userName1 = "Cole"
let userName2 = "Quinton"
let userName3 = "Emily"

console.log(greetUser(userName1))

function genereateEmail(email, suckersName, title, signature) {
    return `To: ${email}
            Title: ${title}
            Hello Mr. ${suckersName}, we've been trying to reach \n
            you about your car's extended warranty. \n
            Sincerely, ${signature}`
}

console.log(genereateEmail("sucker@gmail.com", "Paul", "Warranty", "Mr. Scam Artist"))

// Function Expression

/*
    Function expression utilizies a variable as a placeholder.
    Function expressions are not hoisted.
*/

/*
    let identifier = function(params_if_any) {
        block of executable code
        return statement
    }
*/

let myDog = function(name, breed) {
    return `My dog, ${name} is a ${breed}`
}

console.log(myDog("Bentley", "Olde English Bulldog"))

// Arrow Functions
/*
    Introduced in ES6
    More concise way of writing functions
    Arrow functions are created using function expression ONLY
    Do not bind to this or super (more on that in Classes)
*/

// Concise Body Arrow Function
// Can only have one parameter if it's not enclosed by ( )
// Can have implicit return statement ONLY without using { }

let greetEveryone = () => console.log("Hello class!")
greetEveryone()

/*
    Same as:
    let greetEveryone = function() {
        console.log("Hello class!")
    }
*/

let greetPerson = person => `Hello ${person}`
console.log(greetPerson("Summer"))

// Parentheses around parameters needed only if none or many are present.

// Block Body Arrow Functions

let sendEmail = (email, name) => {
    return `Hello: ${name}:
    
    This is to inform you that you are learning JavaScript.
    
    Good on you! We can send some swag to ${email}.
    
    Sincerely,
    
    Paul & Summer`
}

console.log(sendEmail("pniemczyk@elevenfifty.org", "Paul"))

// Functions and their return statements
// Functions can only return one value. More than one value requires grouping into an array, object, or a set

function twoNums(num1, num2) {
    return num1, num2
}

console.log(twoNums(5, 7)) // returns only 7

// Challenge

/*
    Create a function declaration called addNums that takes two number and returns a result.
*/

function addNums(num1, num2) {
    return num1 + num2
}

console.log(addNums(5, 7))

// Concise arrow function expression solution

let addNumsE = (num1, num2) => num1 + num2

console.log(addNumsE(12, 9));

// Immediately Invoked Function Execution
/*
    Function declaration that has no name and is immediately invoked.
*/

(function() {
    console.log("IIFE")
})();

// Challenge
/*
    Create an arrow function expression named tipCalculator.
    It will take pre-tax bill, sales tax, and tip percentage.
    It will return string interpolated bill total and tip amount.
*/

let tipCalculator = (preTax, salesTax, tipPercent) => {
    let afterTax = preTax * salesTax;
    let result = afterTax * tipPercent;
    return `${result}`
}

let tipCalc = (bill, salesTax, tipPercent) => {
    let taxAmt = bill * (salesTax / 100);
    let totalBill = bill + taxAmt
    let totalTip = totalBill * (tipPercent / 100)
    let billTotal = totalBill + totalTip
    return `Your bill is ${billTotal} of which the tip is ${totalTip}`
}

console.log(tipCalculator(100, 1.07, 1.20))

console.log(tipCalc(100, 8, 20))

// Challenge
/*
    Create a function of your choice (declaration or expression) named capitalizeName.
    It takes one parameter
    It capitalizes the first letter of the name and returns the full name to you.
*/

/*
    function capName(param) {
        Isolate the first letter of param
        Return capitalized first letter and the rest of the name
    }
*/

// function capName(name) {
//     let lowerCase = name.toLowerCase()
//     let fLetter = lowerCase[0].toUpperCase()
//     lowerCase = lowerCase.substr(1)
//     // let restName = lowerCase.substr(1)
//     // console.log(restName)
//     return fLetter + lowerCase
// }

function capName(name) {
    // let lowerCase = name.toLowerCase()
    return name[0].toUpperCase() + name.toLowerCase().substr(1)
}

console.log(capName("Cole"))
// let i = 600

// function startTimer() {
//     let cTimer = setInterval(() => {
//         console.log(i)
//         i -= 1
//         if (i <= 0) {
//             clearInterval(cTimer)
//         }
//     }, 1000);
// }
// startTimer()