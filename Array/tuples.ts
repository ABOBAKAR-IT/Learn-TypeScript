let person: [string, number, boolean] = ["Alice", 25, true];
person.push("ABOBAKAR");
console.log(person);//[ 'Alice', 25, true, 'ABOBAKAR' ]

let person2 : readonly [string, number, boolean] = ["Alice",45, false]
// person2.push("ABOBAKAR"); // error
