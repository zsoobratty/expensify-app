
class Person {
    constructor(name='Anon', age=0) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        // return 'Hello, I am ' + this.name + '!'
        return `Hello, my name is ${this.name}.`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, qualification) {
        super(name, age)
        this.qualification = qualification
    }
    hasQualification(){
        return !!this.qualification
    }
    getDescription() {
        let description = super.getDescription()

        if(this.hasQualification()) {
            description += ` Their qualification is ${this.qualification}.`
        }

        return description
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
        if(this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`
        }
        return greeting
    }
}


const me = new Traveller('Ziad Soobratty', 29, 'London')
console.log(me.getGreeting())

const other = new Traveller()
console.log(other.getGreeting())