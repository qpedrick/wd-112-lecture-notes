// ! CONDITIONALS

/* A falsy value is a value that is considered false when encountered in a Boolean context.
There are 6 falsy values in JS:
- false
- 0
- "", '', ``
- null
-undefined
- NaN (not a number)

What does this mean? Whenever JS is expecting a Boolean value and it returns one of 6 values, it is evaluated as "falsy".
*/

/*
! IF

? When utilizing comparison operators, we typically are asking so we can move on to the next batch of of code. "IF" something is true, do "this thing".
*/

let test = [];
let test1 = 0;
let test2 = 1;
let test3 = null;
let test4 = undefined;
let test5 = NaN;
console.log(Boolean(test));
console.log(Boolean(test1));
console.log(Boolean(test2));
console.log(Boolean(test3));
console.log(Boolean(test4));
console.log(Boolean(test5));

let light = "on";

if (light == "on") {
  console.log("The light is on");
}

let weather = 65;
if (weather < 70) {
  console.log("Consider wearing a jacket");
}

/* SYNTAX
if (conditional){
true
}*/

if (true) {
  console.log("Works");
}

/* Understanding how our comparison operators are functioning can help us ask questions to produce results we are wanting. If the weather is less than 70 degrees outside, we may want to be instructed to wear a jacket. 

? What if we wanted to make sure two things were true inside our if statement?
*/

let rain = true;

if (weather < 70 && rain != false) {
  console.log("It is a little chilly and will possibly rain.");
}

//! CHALLENGE

/* 
 Create two variables :
    1) let batman = 'is the night'
    2) let bruce = true

 Create an if statement that returns true and console log 'Batman'

 9:58
*/
let batman = "is the night";
let bruce = true;
if (batman == "is the night" && bruce == true) {
  console.log("Batman");
}

let fName = "summer";
let season = "fall";

if (fName == "summer" && season == "fall") {
  console.log("It's my favorite season");
}

/*
! IF ELSE

? Perhaps we want to evaluate a question and provide an option for either the "yes" and "no" of that answer. EX. "If you're tired, sleep.If not, go for a walk." If/Else statements allow us this ability to write out a chain of events.
*/

let today = 69;
if (today < 70) {
  console.log(`It's ${today}, wear a jacket`);
} else {
  console.log(`It's ${today}. No jacket needed.`);
}

//? What if there are multiple things you would like check against and compare to?

//! CHALLENGE
/*

    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'

    Silver:
    If It is your name, console log 'Hello, my name is <name>'

    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
    10:20
*/

let name = "Summer";
if (name == "Dean") {
  console.log(`Hello my name is ${name}`);
} else {
  console.log(`Hello is your name ${name}?`);
}

/* 
! ELSE IF
This is a condition that would be checked if the above condition was not met.
*/

//? Let's cook something:

let cookTime = 25;
if (cookTime === 45) {
  console.log("Let us feast!");
} else if (cookTime >= 30) {
  console.log(
    "It has only been " + cookTime + " minutes. Wait another 5 - 15 minutes."
  );
} else if (cookTime >= 20) {
  console.log(
    `It has only been ${cookTime} minutes. Wait another 10 - 25 minutes.`
  );
} else {
  console.log(
    `It has only been ${cookTime} minutes. Perhaps at least try cooking it...`
  );
}

/* The end of the ELSE IF statement should have a simple "Else" to finish it. This is simply stating that none of our conditions were met to execute and we should provide a response to those responses we cam't for.
? It should also be considered that it will finish the method once the condition has been met. Remember, JS reads from top to bottom. If passes on a particular Else If, it will consider it completed. 
*/

let cookTime2 = 40;
if (cookTime2 === 45) {
  console.log("Let us feast!");
} else if (cookTime2 >= 20) {
  console.log(
    `It has only been ${cookTime2} minutes. Wait another 10 -25 minutes.`
  );
} else if (cookTime2 >= 30) {
  console.log(
    `It has only been ${cookTime2} minutes. Perhaps at least try cooking it...`
  );
}

/*
? We can see that although the first statement is true, we actually want it to read the second statement. This would provide us the wrong information and because that first else/if is true, JS no longer needs to finish reading the rest of the else/if statement.
*/
//! CHALLENGE
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:

    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
    11:15
*/

let age = 17;

if (age >= 25) {
  console.log("You can rent a car!");
} else if (age >= 21) {
  console.log("You can drink!");
} else if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("Sorry you're not able to do anything fun!");
}

/*
! TERNARIES

This is a quick way of considering an if/else statement. We are capable of writing out our conditional in a much more simple manner.
*/
//? We can consider an if/else:
let first = "bob";

if (first === "Summer") {
  console.log(`Hi, ${first}!`);
} else {
  console.log(`Not sure I know ${first}`);
}

/*
? Writing a ternary requires us to define our condition = "IF" that returns true, provide a result - "ELSE" return a result.
*/

/* SYNTAX
condition ? if true : else result
*/
let firstN = "Summer";
firstN === "Summer"
  ? console.log(`Hi ${first}! We're using a ternary!`)
  : console.log(`Not sure I know ${first}...`);

let firstName = "Summer";
firstName === "Summer"
  ? console.log(`Hi ${first} We're using a ternary!}`)
  : console.log(`Not sure I know ${first}...`);

//? It's even possible to chain out if/else

let hero = "Batman";
let villain = "Kiteman";

hero == "Batman" && villain == "Riddler"
  ? console.log(`What has a head and a tail but no body?`)
  : hero == "Batman" && villain == "Joker"
  ? console.log(`Why so serious?`)
  : hero == "Batman" && villain == "Kiteman"
  ? console.log(`What does Kiteman do?`)
  : console.log(`${hero} is the night!`);

//! CHALLENGE
// Take this if/else statement and make it into a ternary.

let lampOn = false;
let daytime = true;

if (lampOn == true && daytime != true) {
  console.log("The lamp is on during the night");
} else if (lampOn != true && daytime != true) {
  console.log("The lamp is off during the night");
} else if (lampOn == true && daytime == true) {
  console.log("The lamp is on during the day");
} else if (lampOn != true && daytime == true) {
  console.log("The lamp is off during the day");
} else {
  console.log("What lamp?");
}

// 11:50

let lampOnn = false;
let dayTime = true;

lampOnn == true && !dayTime
  ? console.log("The lamp is on during the night")
  : lampOnn != true && dayTime != true
  ? console.log("The lamp is off during the night")
  : lampOnn == true && dayTime == true
  ? console.log("The lamp is on during the day")
  : lampOnn != true && dayTime == true
  ? console.log("The lamp is off during the day")
  : console.log("What lamp?");

/*
!SWITCH

-The switch statement executes a block of code depending upon different cases.

? Switch statements are another versioning of how we consider if/else statements. We are asking a question and requiring a specific response that is determined by out answer.
*/

let instructor = "Zach";

switch (instructor) {
  case "Zach":
    console.log(`${instructor} is  part of the Web Development team.`);
    break;
  //Once each case has been evaluated and we return a result, we need note to "break" out from our switch statements, otherwise we continue on through out statements and produce those results as well.
  case "Ing":
    console.log(`${instructor} is part of the Web Development team.`);
    break;
  default:
    console.log(`Sorry I can't find what ${instructor} teaches at this time.`);
  //We must end all our switch statements with a default in the same way that we need to end our ElseIf statements on a "default" result. Think of this as a "catch" to those conditions that we either haven't considered or don't want to consider.

  //We can also simplify this down to check among a variety of cases to result in one response.
}

instructor = "Paul";

switch (instructor) {
  case "Ing":
  case "Adam":
  case "Eric":
  case "Zach":
  case "Donovan":
    console.log(`${instructor} is part of the Web Development team.`);
    break;
  case "Josh":
  case "Amanda":
  case "Casey":
  case "Junior":
    console.log(`${instructor} is part of the Software Development team.`);
    break;
  default:
    console.log(`Sorry, I can't find what ${instructor} teaches.`);
}

//! CHALLENGE
/*
Create a 'grade' variable that holds a string value of 'A,B,C,D or F.
 Create a switch statement that passes that variable to check.  Depending on the grade, console log a string result that indicates what they need (ex: A = 'Passed!', F = 'Failing', etc.).   
 1:25
*/

let grade = "C";
switch (grade) {
  case "A":
    console.log("You got an A!");
    break;
  case "B":
    console.log("Almost there!");
    break;
  case "C":
    console.log("Could use a bit more study time.");
    break;
  case "D":
    console.log("Time to put in some extra work..");
    break;
  case "F":
    console.log("Failing..");
    break;
  default:
    console.log("Grades should be A, B, C, D or F.");
}


//? We can apply conditionals within our switch to be met as well

let switchConditional = 1;
switch(switchConditional== "string" || typeof switchConditional == "boolean"){
    case true:
        console.log(`${switchConditional} is a string or boolean!`)
        break;
        default:
            console.log(`${switchConditional} is NOT a string or boolean.`);
}

// Challenge 2 Take Home Challenge
/*
    Create a switch statement that takes in a value (number) that represents a grade. If it is True, console log that they are passign with the correct letter grade.

    A: 89-100
    B: 79-88
    C: 66-78
    D: 59-65
    F: 0-59
*/

let grade = 78;

switch(true) {
    case grade > 89:
        console.log(`Passing with A`)
        break;
    case grade > 79:
        console.log(`Passingw with B`)
        break;
    case grade > 66:
        console.log(`Passing with C`)
        break;
    case grade > 59:
        console.log(`Passing with D`)
        break;
    case grade < 59:
        console.log(`Failing`)
        break;
    default:
        console.log(`Input is not a grade`)
}
