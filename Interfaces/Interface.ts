interface Rectangle {
    height: number,
    width: number
  }
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };

interface Person {
    name: string;
    age: number;
}

let user:Person = {
  name:"abobakar",
  age: 23
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
