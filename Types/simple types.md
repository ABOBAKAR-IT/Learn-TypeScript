# TypeScript Simple Types
## There are three amin primitives in JavaScript and typescript
- boolean : true or false values
- number : whole numbers and floating point numbers
- string : text

# Type Assignment
When creating a variable, there are two main ways TypeScript assigns a type:

- Explicit
- Implicit

# Explicit Type
Explicit types are assigned by the developer. This is done by adding a colon and the type after the variable name.

```
let firstname: string="abobakar"
```

# Implicit Type
Implicit types are assigned by TypeScript. This is done by assigning a value to a variable without specifying a type.TypeScript will "guess" the type, based on the assigned value:

```
let firstname="abobakar"
```
# Error in Type Assignment
If you try to assign a value of a different type to a variable, TypeScript will throw an error:

```
let firstname: string="abobakar"
firstname=10// throw error
```
Unable to Infer
TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to any which disables type checking.
```
let firstname: any="abobakar"
firstname=10// no error
```
