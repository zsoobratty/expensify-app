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

const book = {
    title: 'Harry Potter',
    author: 'J K Rowling',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-published'} = book.publisher


console.log(publisherName)