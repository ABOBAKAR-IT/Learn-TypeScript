## Union | (OR)
In TypeScript, a union type is a way to indicate that a variable can have one of several different types. You can create a union type by using the | (pipe) operator to separate the different types.

For example, you can create a variable that can be either a string or a number:
```
let myVariable: string | number;
```
This variable can be assigned a string value:
```
myVariable = "Hello";
```
This variable can also be assigned a number value:
```
myVariable = 10;
```
You can also create union types for object types, for example:
```
interface Dog {
    bark: () => void;
}
interface Cat {
    meow: () => void;
}
let pet: Dog | Cat;

pet = {
    bark: () => console.log('woof')
}
pet.bark();

pet = {
    meow: () => console.log('meow')
}
pet.meow();
```
In this example, the pet variable can be either a Dog or a Cat object, and you can call the appropriate method on it depending on its actual type.

<br>
You can use the typeof operator to check the type of a variable with a union type, for example:
```
if (typeof myVariable === "string") {
    console.log(myVariable.toUpperCase());
} else if (typeof myVariable === "number") {
    console.log(myVariable.toExponential());
}
```
You can also use the instanceof operator to check if an object is an instance of a certain class, for example:
```
if(pet instanceof Dog){
    console.log("this is a dog")
}
else if(pet instanceof Cat){
    console.log("this is a cat")
}
```