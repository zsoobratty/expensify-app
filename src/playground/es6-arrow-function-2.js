const add = (a,b) => {
    // console.log(arguments)
    return a + b
}
console.log(add(1,2,1001))

// this keyword - no longer bound

const user = {
    name: 'Ziad',
    cities: ['London', 'Paris', 'New York'],
    printPlacesLived() {
        return this.cities.map((city)=> this.name + ' has lived in ' + city)
    }
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((num)=> num * this.multiplyBy)
    }
}

console.log(multiplier.multiply())