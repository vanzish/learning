function greet(greeting = 'Hello', name = 'Friend'){
    console.log(`${greeting} ${name}`);
}

greet('Hi', 'Bill');
greet();

function sum(){ 
    console.log(arguments instanceof Array);
  
    var sum = 0;
    Array.prototype.forEach.call(arguments, function(value){
      sum += value;
    });
  
    console.log(sum);
  }

  function sum(...values){
    console.log(values instanceof Array);
    console.log(values);

    let sum = 0;
    values.forEach(function(value){
        sum += value;
    });

    console.log(sum);
  }
  
  function sum(...values){
    console.log(values.reduce(function(prevValue, currentValue){
        return prevValue + currentValue;
    }));
  }

  sum(1, 2, 3, 5);

