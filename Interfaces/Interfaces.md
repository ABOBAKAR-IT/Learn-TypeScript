## Interfaces
 In TypeScript, an interface is a way to define the structure and the types of the properties of an object. It's a contract or a blueprint that specifies the shape of an object, and it can be used to define the type of a variable, a function parameter, or a return value.
 ```
 interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};
```



## Extending Interfaces
In TypeScript, you can use the extends keyword to indicate that an interface inherits from another interface. This means that the derived interface will have all the properties and methods defined in the base interface, and it can also add additional properties and methods of its own.

Here's an example of how you can use the extends keyword to create a derived interface:
```
interface Person {
    name: string;
    age: number;
}
interface Employee extends Person {
    salary: number;
}

let employee: Employee = {
    name: "Bob",
    age: 30,
    salary: 50000
};
console.log(employee.name); // "Bob"
console.log(employee.age); // 30
console.log(employee.salary); // 50000

```
You can also extend multiple interfaces

```
interface Person {
    name: string;
    age: number;
}
interface Employee {
    salary: number;
}
interface Manager extends Person, Employee {
    department: string;
}
```