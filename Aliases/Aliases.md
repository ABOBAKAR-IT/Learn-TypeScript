# Alias
In TypeScript, an alias is a way to give a type or a value a new name. 
Type Aliases allow defining types with a custom name (an Alias).
Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

You can use the type keyword to create a type alias. Here's an example:
```
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
```
You can also use the const or let keyword to create a value alias
```
const PI = 3.14;
const pi = PI;
console.log(pi); // 3.14
```
It's important to keep in mind that an alias is just a new name for an existing type or value, and it doesn't create a new type or value.
