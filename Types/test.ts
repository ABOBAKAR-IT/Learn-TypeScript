let firstname: string = "John";
let lastname: any="jon";
 let age: unknown =10;


 let x: unknown = [1, 2, 3];
let y: any = [1, 2, 3];
let v: unknown = "hello";
console.log(v.toUpperCase());//error

if (typeof v === "string") {
    console.log(v.toUpperCase());// valid
}

console.log()
if (Array.isArray(x)) {
    x.push(4);
}
console.log(x)
y.push(4); // valid