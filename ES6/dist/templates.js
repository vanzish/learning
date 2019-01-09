"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["Hello ", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
  console.log("Hello ".concat(name).toUpperCase());
}

greet('Bill');

function createEmail(to, from, subject, message) {
  console.log("\n        To: ".concat(to, "\n        From: ").concat(from, "\n        Subject: ").concat(subject, "\n        Message: ").concat(message, "\n    "));
}

createEmail('1@1.com', '2@2.com', 'Hello', 'How are you doing?');

function add(x, y) {
  console.log("".concat(x, " + ").concat(y, " = ").concat(parseInt(x) + parseInt(y)));
}

add(3, 15);
var name = 'Bill';
console.log(upperNames(_templateObject(), name));

function upperNames(literals) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return literals[0] + values[0].toUpperCase();
}