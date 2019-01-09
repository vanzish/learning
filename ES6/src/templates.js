function greet(name){
    console.log(`Hello ${name}`.toUpperCase());
}

greet('Bill');

function createEmail(to, from, subject, message){
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
}

createEmail('1@1.com', '2@2.com', 'Hello', 'How are you doing?');

function add(x, y){
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
  }
  
add(3, 15);

let name = 'Bill';
console.log(upperNames`Hello ${name}`);

function upperNames(literals, ...values){
    return literals[0] + values[0].toUpperCase();
}