# Tuples
## Typed Arrays
A tuple is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

To define a tuple, specify the type of each element in the array:
You can declare a tuple by specifying the types of the elements inside square brackets. Here's an example:
```
let person: [string, number, boolean] = ["Alice", 25, true];
```
## readonly tuples
```
let person: readonly [string, number, boolean] = ["Alice", 25, true];
person.push(1); // Error
```