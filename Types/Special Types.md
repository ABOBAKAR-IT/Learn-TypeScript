# TypeScript Special Types
 ## type: any

any is a special type that allows you to assign any type to a variable. This is useful when you are not sure what type a variable will be. It is also useful when you are working with a third-party library that does not have TypeScript support.
    any type off the typescript type checking support.
```
let x: any = "hello";
x = 42; // valid
x = true; // valid
```
# type unknown 
The unknown type in TypeScript is similar to the any type, but it provides a more strict type checking. When a variable is declared with the unknown type, it can be assigned any value, including values of different types, just like any. However, before using a variable of type unknown, it needs to be explicitly type-checked.
```
let x: unknown = "hello";
    console.log(x.toUpperCase());// error 

// Type checking is required before using the value
if (typeof x === "string") {
    console.log(x.toUpperCase());//valid 
}
```
```
let a: unknown = [1, 2, 3];
let b:any= [1,2,3]
a.push(4); // error
b.push(4); // valid

// Type checking is required before using the value
if (Array.isArray(x)) {
    x.push(4); // valid
}

```
The unknown type is a more secure replacement of any type, it ensures that you cannot perform operations on an unknown value without first performing type checking.

When you use unknown instead of any, TypeScript will force you to perform type checking before you can use the value. This will make you aware of potential type errors at development time and prevent runtime errors.

In addition, unknown is a supertype of all other types, which means that you can't assign other types to a variable of type unknown without type checking, this is the opposite of any that can be assign to any variable.

It's a good practice to use unknown instead of any when you're not sure of the type of a value and you want to ensure type safety and prevent runtime errors.

### Note
```

The reason that variables of type any do not show optional functions after the dot is because TypeScript cannot infer the type of the value assigned to an `any` type variable.

The reason that variables of type unknown show options for methods and properties after the dot operator is because TypeScript can still infer the type of the value assigned to a variable of type unknown through type checking.

```

## type: never
The never type in TypeScript represents the absence of a value, it is used to represent the following cases:
A function that never returns: A function that throws an error or goes into an infinite loop is one that never returns, and the return type of such a function is never.
```
function error(message: string): never {
    throw new Error(message);
}
```
A variable that is never reassigned: A variable that is never reassigned to a new value is one that never changes, and the type of such a variable is never.
```
const x: never = error("This is an error");
```

```
function error(message: string): never {
    throw new Error(message);
}
```
```
function infiniteLoop(): never {
    while (true) {
        // infinite loop
    }
}
```
```
let x: never;
x = 1; // error
x = "hello"; // error
x = error("error"); // error
x = infiniteLoop(); // error
```
It's important to keep in mind that never type is a subtype of all other types, meaning that you can use it wherever any other type is expected. However, you cannot assign any other type to a variable that has a never type.

It's also important to note that null and undefined are subtypes of all other types, including never, so you can assign null and undefined to variables with a never type.

In a few words, never type represents the absence of a value, it's used when a function never returns, a variable never changes, or a function has no reachable endpoint. It's a subtype of all other types, and it cannot be assigned to any other type.

# Type: undefined & null
undefined and null are types that refer to the JavaScript primitives undefined and null respectively
```
let y: undefined = undefined;
let z: null = null;
```

