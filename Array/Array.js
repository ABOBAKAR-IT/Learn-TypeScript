var numbers = [1];
numbers.push(4);
console.log(numbers); //[ 1, 4 ]
var person = ["str", 2, true];
person.push(3); //valid 
person.push("rana abobakar"); //valid
console.log(person); // [ 'str', 2, true, 3, 'rana abobakar' ]
var values = ["hello", 42, "world", 13];
values.push("rana");
values.push(33);
values.push(22);
console.log(values); //[ 'hello', 42, 'world', 13, 'rana', 33, 22 ]
var names = ["Alice", "Bob", "Charlie"];
//names[0] = "Eve"; // Error: Index signature in type 'readonly string[]' only permits reading.
//names.push("Dave"); // Error: Property 'push' does not exist on type 'readonly string[]'.
var person1 = ["Alice", 25, true];
//person1[0] = "Eve"; // Error: Index signature in type 'readonly [string, number, boolean]' only permits reading.
//person1.push("Dave"); // Error: Property 'push' does not exist on type 'readonly [string, number, boolean]'.
