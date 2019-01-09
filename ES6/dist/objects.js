"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';
var person1 = {
  firstName: firstName,
  lastName: lastName,
  email: email
};
var person = {
  firstName: firstName,
  lastName: lastName,
  email: email,
  sayHello: function sayHello() {
    console.log("Hello! My name is ".concat(this.firstName, " ").concat(this.lastName));
  },
  sayHi: function sayHi() {
    console.log("Hi! My name is ".concat(this.firstName, " ").concat(this.lastName));
  },

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },

  set fullName(value) {
    this.firstName = value;
  }

}; // Object.defineProperty(person, 'fullName', {
//     get: function() {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set: function(value) {
//         this.firstName = value;
//     }
// });

console.log(person); // person.sayHello();
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
  var _ref;

  return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, '_' + property, value), _defineProperty(_ref, property.toUpperCase(), value), _defineProperty(_ref, 'get' + property, function () {
    return this[property];
  }), _ref;
}

console.log(createCar('vin', 1));