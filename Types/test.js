var firstname = "John";
var lastname = "jon";
lastname = 23;
var age = 10;
age = "ten";
// function error(message) {
//     throw new Error(message);
// }
// var A = error("message");
// console.log(A);
var x = [1, 2, 3];
var y = [1, 2, 3];
console.log(typeof (x));
if (typeof x == "object") {
    x.push(4);
}
console.log(x)
y.push(4); // valid
