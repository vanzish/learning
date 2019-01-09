let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

let person1 = {
    firstName: firstName,
    lastName: lastName,
    email: email
}

let person = {
    firstName,
    lastName,
    email,
    sayHello: function(){
        console.log(`Hello! My name is ${this.firstName} ${this.lastName}`);
    },
    sayHi() {
        console.log(`Hi! My name is ${this.firstName} ${this.lastName}`);
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }
}

// Object.defineProperty(person, 'fullName', {
//     get: function() {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set: function(value) {
//         this.firstName = value;
//     }
// });

console.log(person);
// person.sayHello();
// person.sayHi();

// person.firstName;
// person['firstName'];

// let property = 'firstName';
// person[property];

// person = {
//     [property]: 'Bill'
// }

// function createCar(property, value) {
//     let car = {}
//     car[property] = value;

//     return car;
// }

function createCar(property, value) {
    return {
        [property]: value,
        ['_' + property]: value,
        [property.toUpperCase()]: value,
        ['get' + property]() {
            return this[property];
        }
    };
}

console.log(createCar('vin', 1));