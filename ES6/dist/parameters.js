"use strict";

function greet() {
  var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Friend';
  console.log("".concat(greeting, " ").concat(name));
}

greet('Hi', 'Bill');
greet();

function sum() {
  console.log(arguments instanceof Array);
  var sum = 0;
  Array.prototype.forEach.call(arguments, function (value) {
    sum += value;
  });
  console.log(sum);
}

function sum() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  console.log(values instanceof Array);
  console.log(values);
  var sum = 0;
  values.forEach(function (value) {
    sum += value;
  });
  console.log(sum);
}

function sum() {
  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  console.log(values.reduce(function (prevValue, currentValue) {
    return prevValue + currentValue;
  }));
}

sum(1, 2, 3, 5);