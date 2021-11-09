//Classes

/*
    Templates or blueprints for creating objects.  They encapsulate data with code.  JS is a heavily prototype-based OOP language.

    Classes are considered special functions and therefore can be defined as:
        -Class Declaration
        -Class Expression

*/

let pNiemczyk = new Teacher("Paul" , "web dev" , 2020 , true)
console.log(pNiemczyk)

class Teacher {
    // constructor - a class method for creation and initialization of a class object.
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name
        this.subject = subject
        this.tenure = tenure
        this.isPolyglot = isPolyglot
    }
}

//Creating new instance of Teacher Class Declaration

let pNiemczyk = new Teacher("Paul" , "web dev" , 2020 , true)
//pNiemczyk.subject = "Math"

console.log(pNiemczyk)

//Creating objects for every teacher is laborious
//Class gives us an easy template to reuse over and over again.

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
    }

}

let $10070OrangeSt = new House("1007 Orange St" , 3 , 2)
console.log($10070OrangeSt)
let $430ParkAve = new House("430 N Park Ave" , 1 , 1)
console.log($430ParkAve)

//Class Methods

/*
    Method is a function that lives inside of a class that is reused on any class instances.
*/

class car {
    constructor(make, model, year, transmission) {
        this.make = make
        this.model = model
        this.year = year
        this.transmission = transmission
    }

    greetCar() {
        console.log(`Welcome to your ${this.year} ${this.make} ${this.model}`)
    }

    greetDriver(driver) {
        console.log(`Hello, ${driver}, your ${this.year} ${this.make} ${this.model} is ready to go!`)
    }
}

let jeep = new car("Jeep", "Wrangler", 2019, "manual")

console.log(jeep) //returns Class
jeep.greetCar()
jeep.greetDriver("Kyle")

/*
    Create a class object called Avengers. Avengers will have properties of name, superpower, age, isDead, keyMovie.

    Create an instance of that object with the superhero name and its properteis

    ? Create a method that console logs the name and keyMovie togetther

    ! SPICEY MODE
    ! Create a method that takes the name of the superhero and checks it against two arrays. One with Team Cap, and one with Team Stark and returns which team the superherow as a part of during Civil War

    ! Be done 11:05 ET
*/

class Avengers {
    constructor(name, superpower, age, isDead, keyMovie) {
        this.name = name
        this.superpower = superpower
        this.age = age
        this.isDead = isDead
        this.keyMovie = keyMovie
    }

    featuredFilm() {
        console.log(`${this.name} stars in ${this.keyMovie}`)
    }

    whichTeam(extraAvengers) {
        let teamStark = ["Tony Stark - Iron Man" , "Homer" , "Marge"]
        let teamCap = ["Captain America" , "Cat" , "Dog"]

        if (teamStark.includes(this.name)) {
            return `${this.name} is on Team Stark`
        }
        else if (teamCap.includes(this.name)) {
            return `${this.name} is on Team Cap`
        }
        else {
            return `${this.name} is not in our database.`
        }
    }
}

let Stark = new Avengers("Tony Stark - Iron Man", "SadBass", 42, true, "IronMan")

console.log(Stark)
Stark.featuredFilm("Stark")
Stark.whichTeam()

let extraAvengers = "Homer"

Avengers.whichTeam(extraAvengers)

//Inheritance
//Extends

class Options extends Car {
    
}

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
    }
}

class Sale extends House {
    constructor(
    address,
    bedrooms,
    bathrooms,
    appraisalValue, 
    listPrice, 
    agent, 
    isLIsted
    ) {
    super(address, bedrooms, bathrooms)
    this.appraisalValue = appraisalValue
    this.listPrice = listPrice
    this.agent = agent
    this.isLIsted = isLIsted
    }

    differencePrice() {

        let Price = this.listPrice - this.appraisalValue

        if ((Price/this.appraisalValue) > .2) {
            return `${this.listPrice} is a good deal! You can make ${Price} on this deal!`
        }
        else if (((Price/this.appraisalValue) <= .2) && ((Price/this.appraisalValue) > 0)) {
            return `${this.listPrice} is not a good deal! Expected profit is only ${Price} on this deal.`
        }
        else if ((Price/this.appraisalValue) === 0) {
            return `${this.listPrice} is not a good deal! ${Price} means there is no profit or loss.`
        }
        else if ((Price/this.appraisalValue) <= 0) {
            return `${this.listPrice} is not a good deal! Expected loss is ${Price} on this deal.`
        }
        else {
            return `Something is not right.`
        }
    }
}

let myHouse = new Sale("", 2, 2, 200000, 200000)
console.log(myHouse.differencePrice())