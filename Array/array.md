# Type: Array

In TypeScript, an array is a collection of elements of the same type. You can declare an array type by placing the type of the elements inside square brackets.

For example, the following code declares an array of numbers:
```
let numbers: number[] = [1, 2, 3];
```
You can also use the generic Array type to declare an array of a specific type:

```
let names: Array<string> = ["Alice", "Bob", "Charlie"];
```
In addition to the basic array types, you can also use more complex types to define the structure of an array. For example, you can use a tuple type to define the types and the order of the elements in an array:
```
let person: [string, number, boolean] = ["Alice", 25, true];
person.push(3);//valid
person.push("rana abobakar");//valid

console.log(person)
```
You can also use union types to define an array that can contain elements of multiple types:
```
let values: (string | number)[] = ["hello", 42, "world", 13];
values.push("rana")
 values.push(33)
 values.push(22)

console.log(values);//[ 'hello', 42, 'world', 13, 'rana', 33, 22 ]

```
It's important to keep in mind that when you're working with arrays in TypeScript, it's a good practice to specify the type of the elements, this will give you better type checking, fewer runtime errors and better code maintainability.

# Readonly
In TypeScript, the readonly keyword can be used to make an array's elements read-only, which means that the elements of the array cannot be reassigned or modified after the array is created.

To make an array's elements read-only, you can use the readonly keyword before the type of the elements in the array. Here's an example:
```
let names: readonly string[] = ["Alice", "Bob", "Charlie"];
names[0] = "Eve"; // Error: Index signature in type 'readonly string[]' only permits reading.
names.push("Dave"); // Error: Property 'push' does not exist on type 'readonly string[]'.
```
You can also make a readonly tuple
```
let person: readonly [string, number, boolean] = ["Alice", 25, true];
person[0] = "Eve"; // Error: Index signature in type 'readonly [string, number, boolean]' only permits reading.
```
# ReadonlyArray
The ReadonlyArray type is a generic type that can be used to make an array's elements read-only. Here's an example:
```
let names: ReadonlyArray<string> = ["Alice", "Bob", "Charlie"];
names[0] = "Eve"; // Error: Index signature in type 'readonly string[]' only permits reading.
names.push("Dave"); // Error: Property 'push' does not exist on type 'readonly string[]'.
```
 so you can't change the values of the array after it's been created. This is a way to make your code more predictable and less error-prone.