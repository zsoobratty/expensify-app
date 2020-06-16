//
// Object Destructuring:
//

// const person = {
//     name: 'Ziad',
//     age: 90,
//     location: {
//         city: 'London',
//         temp: 20
//     }
// };

// const {name: firstName = 'Anon', age} = person

// console.log(`${firstName} is ${age}.`)

// const {city, temp: temperature} = person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} degrees celsius in ${city}`)
// }

// const book = {
//     title: 'Harry Potter',
//     author: 'J K Rowling',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-published'} = book.publisher


// console.log(publisherName)

//
// Array Destructuring:
//

const address = ['10 Downing Street', 'London', 'United Kingdom', 'SW1A 2AA']
const [, city, country = 'UK'] = address
console.log(`You are in ${city} ${country}`)

const item = ['Coffee (iced)', '£3.00', '£3.50', '£3.75']
const [itemName, , medium] = item

console.log(`A medium ${itemName} costs ${medium}`)