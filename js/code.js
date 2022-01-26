//alert("Hello JS!");

var table = "Normal table";
let chair = "One chair";

console.log(table);
console.log(chair);

let testBoolean = true;
console.log(testBoolean);

let testNumber = 10;
console.log(testNumber);

let testString = "text";
console.log(testString);

let testBooleanObject = new Boolean(true);
console.log(testBooleanObject);

let testNumberObject = new Number(10);
console.log(testNumberObject);

//Concatenate variable
let nameOp = "John";
let surname = "Lennon";
let question = "How are you " + nameOp + " " + surname + "?";
console.log(question);

//To E56 we can use bactick to create inteerpolated strings
let nameOp2 = "John";
let surname2 = "Lennon";
let age = 22;
let question2 = `How old is ${nameOp2} ${surname2}?`;
let answer = "He is " + age + " years old."
console.log(question2);
console.log(answer);

//Concatenate using method string.ooncat
let name3 = "John";
let surname3 = "Lennon";
let question3 = "How are you ".concat(name3).concat("?");
console.log(question3);


//Arithmetic operations
//Sum, rest, mult, div
let operator_a = 12;
let operator_b = 6;
let sum = operator_a + operator_b;
console.log(sum);

//Assigments operators
let x = 5;
let y = 6;
console.log(x+=5);
console.log(x-=5);

//Typeof
let testBoolean2 = true;
console.log(typeof(testBoolean2));

//Null
let testNull = null;
console.log(testNull);
console.log(typeof(testNull));

//Undefinied
let testUndefinied;
console.log(testUndefinied);


//Array
var first_array = [];
var second_array = new Array(3);
var third_array = new Array(3,5);
var fourth_array = new Array(3,5,"Sevilla", true, third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(third_array[1]);
console.log(fourth_array[4][0])

fourth_array.push("Andalucia");
console.log(fourth_array);
fourth_array.unshift(1);
console.log(fourth_array);
fourth_array.pop(1);
console.log(fourth_array);

//For / for each
/*
for(var i=0; i<fourth_array.length;i++){
    console.log("Entramos en la iteracion de " + fourth_array[i]);
}
*/
/*
for (var i = fourth_array.length;i>=0;i--){
    console.log("Second iteration " + fourth_array[i]);
}
*/
/*
var i = fourth_array.length;
for(;i>=0;i--){
    console.log("Third iteration " + fourth_array);
}
*/

fourth_array.forEach(function(element){
    console.log("Fourth iteration " + element);
});