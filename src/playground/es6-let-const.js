var nameVar = 'Ziad'
var nameVar = 'Dave'
console.log('nameVar', nameVar)

let nameLet = 'Dad'
nameLet = 'Mum'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

function getPetName() {
    var petName = 'Meg';
    return petName;
}

// Block scoping

const fullName = 'Said Soobratty';
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)