
# Array Destructuring
In TypeScript, you can use array destructuring to extract values from an array. Here's an example:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let [first, second, third] = names;
console.log(first); // Alice
console.log(second); // Bob
console.log(third); // Charlie
```
You can also use the rest syntax to extract the remaining elements of an array:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let [first, ...rest] = names;
console.log(first); // Alice
console.log(rest); // [ 'Bob', 'Charlie' ]
```
# Array Spread
In TypeScript, you can use the spread syntax to create a new array from an existing array. Here's an example:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let newNames = [...names, "Dave"];
console.log(newNames); // [ 'Alice', 'Bob', 'Charlie', 'Dave' ]
```
# Array Methods
In TypeScript, you can use the following methods to work with arrays:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
names.push("Dave"); // Add an element to the end of the array
names.pop(); // Remove the last element from the array
names.unshift("Eve"); // Add an element to the beginning of the array
names.shift(); // Remove the first element from the array
names.splice(1, 2); // Remove two elements starting from the second element
names.slice(1, 2); // Extract two elements starting from the second element
names.indexOf("Bob"); // Find the index of the element "Bob"
names.includes("Bob"); // Check if the array contains the element "Bob"
names.concat(["Dave", "Eve"]); // Concatenate two arrays
names.join(", "); // Join all elements of the array into a string
names.reverse(); // Reverse the order of the elements in the array
names.sort(); // Sort the elements in the array
names.forEach((name) => console.log(name)); // Iterate over the elements in the array
names.map((name) => name.toUpperCase()); // Create a new array with the results of calling a provided function on every element in the array
names.filter((name) => name.startsWith("B")); // Create a new array with all elements that pass the test implemented by the provided function
names.reduce((previousValue, currentValue) => previousValue + currentValue); // Apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
names.reduceRight((previousValue, currentValue) => previousValue + currentValue); // Apply a function against an accumulator and each element in the array (from right to left) to reduce it to a single value
names.every((name) => name.length > 0); // Check if all elements in the array pass the test implemented by the provided function
names.some((name) => name.length > 0); // Check if at least one element in the array passes the test implemented by the provided function
names.find((name) => name.length > 0); // Return the first element in the array that passes the test implemented by the provided function
names.findIndex((name) => name.length > 0); // Return the index of the first element in the array that passes the test implemented by the provided function
names.fill("Bob"); // Fill all the elements of the array from a start index to an end index with a static value
names.copyWithin(1, 2); // Copy sequence of array elements within the array
```
# Array Iteration
In TypeScript, you can use the following methods to iterate over the elements of an array:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
for (let name of names) {
  console.log(name);
}
```
# Array Iteration with forEach
In TypeScript, you can use the forEach method to iterate over the elements of an array:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
names.forEach((name) => console.log(name));
```
# Array Iteration with map
In TypeScript, you can use the map method to iterate over the elements of an array and create a new array with the results of calling a provided function on every element in the array:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let newNames = names.map((name) => name.toUpperCase());
console.log(newNames); // [ 'ALICE', 'BOB', 'CHARLIE' ]
```
# Array Iteration with filter
In TypeScript, you can use the filter method to iterate over the elements of an array and create a new array with all elements that pass the test implemented by the provided function:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let newNames = names.filter((name) => name.startsWith("B"));
console.log(newNames); // [ 'Bob' ]
```
# Array Iteration with reduce
In TypeScript, you can use the reduce method to iterate over the elements of an array and reduce it to a single value:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let nameString = names.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(nameString); // AliceBobCharlie
```
# Array Iteration with reduceRight
In TypeScript, you can use the reduceRight method to iterate over the elements of an array (from right to left) and reduce it to a single value:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let nameString = names.reduceRight((previousValue, currentValue) => previousValue + currentValue);
console.log(nameString); // CharlieBobAlice
```
# Array Iteration with every
In TypeScript, you can use the every method to iterate over the elements of an array and check if all elements pass the test implemented by the provided function:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let allNamesLongerThanZero = names.every((name) => name.length > 0);
console.log(allNamesLongerThanZero); // true
```
# Array Iteration with some
In TypeScript, you can use the some method to iterate over the elements of an array and check if at least one element passes the test implemented by the provided function:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let someNamesLongerThanZero = names.some((name) => name.length > 0);
console.log(someNamesLongerThanZero); // true
```
# Array Iteration with find
In TypeScript, you can use the find method to iterate over the elements of an array and return the first element that passes the test implemented by the provided function:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let nameLongerThanZero = names.find((name) => name.length > 0);
console.log(nameLongerThanZero); // Alice
```
# Array Iteration with findIndex
In TypeScript, you can use the findIndex method to iterate over the elements of an array and return the index of the first element that passes the test implemented by the provided function:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let indexLongerThanZero = names.findIndex((name) => name.length > 0);
console.log(indexLongerThanZero); // 0
```
# Array Iteration with fill
In TypeScript, you can use the fill method to fill all the elements of the array from a start index to an end index with a static value:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
names.fill("Bob");
console.log(names); // [ 'Bob', 'Bob', 'Bob' ]
```
# Array Iteration with copyWithin
In TypeScript, you can use the copyWithin method to copy a sequence of array elements within the array:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
names.copyWithin(1, 2);
console.log(names); // [ 'Alice', 'Charlie', 'Charlie' ]
```
# Array Iteration with entries
In TypeScript, you can use the entries method to return a new Array Iterator object that contains the key/value pairs for each index in the array:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let iterator = names.entries();
console.log(iterator.next().value); // [ 0, 'Alice' ]
console.log(iterator.next().value); // [ 1, 'Bob' ]
console.log(iterator.next().value); // [ 2, 'Charlie' ]
```
# Array Iteration with keys
In TypeScript, you can use the keys method to return a new Array Iterator object that contains the keys for each index in the array:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let iterator = names.keys();
console.log(iterator.next().value); // 0
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
```
# Array Iteration with values
In TypeScript, you can use the values method to return a new Array Iterator object that contains the values for each index in the array:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let iterator = names.values();
console.log(iterator.next().value); // Alice
console.log(iterator.next().value); // Bob
console.log(iterator.next().value); // Charlie
```
# Array Iteration with Symbol.iterator
In TypeScript, you can use the Symbol.iterator method to return a new Array Iterator object that contains the values for each index in the array:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let iterator = names[Symbol.iterator]();
console.log(iterator.next().value); // Alice
console.log(iterator.next().value); // Bob
console.log(iterator.next().value); // Charlie
```
# Array Iteration with from
In TypeScript, you can use the from method to create a new array from an array-like or iterable object:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let newNames = Array.from(names);
console.log(newNames); // [ 'Alice', 'Bob', 'Charlie' ]
```
# Array Iteration with of
In TypeScript, you can use the of method to create a new array from a variable number of arguments:
```
let names = Array.of("Alice", "Bob", "Charlie");
console.log(names); // [ 'Alice', 'Bob', 'Charlie' ]
```
# Array Iteration with concat
In TypeScript, you can use the concat method to merge two or more arrays:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let newNames = names.concat(["Dave", "Eve"]);
console.log(newNames); // [ 'Alice', 'Bob', 'Charlie', 'Dave', 'Eve' ]
```
# Array Iteration with includes
In TypeScript, you can use the includes method to determine whether an array contains a certain element:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let hasAlice = names.includes("Alice");
console.log(hasAlice); // true
```
# Array Iteration with indexOf
In TypeScript, you can use the indexOf method to search the array for an element and returns its first index:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let index = names.indexOf("Bob");
console.log(index); // 1
```
# Array Iteration with join
In TypeScript, you can use the join method to join all elements of an array into a string:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let nameString = names.join();
console.log(nameString); // Alice,Bob,Charlie
```
# Array Iteration with lastIndexOf
In TypeScript, you can use the lastIndexOf method to search the array for an element, starting at the end, and returns its index:
```
let names: string[] = ["Alice", "Bob", "Charlie", "Bob"];
let index = names.lastIndexOf("Bob");
console.log(index); // 3
```
# Array Iteration with pop
In TypeScript, you can use the pop method to remove the last element from an array and returns that element:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let name = names.pop();
console.log(name); // Charlie
console.log(names); // [ 'Alice', 'Bob' ]
```
# Array Iteration with push
In TypeScript, you can use the push method to add one or more elements to the end of an array and returns the new length of the array:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let length = names.push("Dave");

console.log(length); // 4
console.log(names); // [ 'Alice', 'Bob', 'Charlie', 'Dave' ]
```
# Array Iteration with reverse
In TypeScript, you can use the reverse method to reverse the elements in an array:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
names.reverse();

console.log(names); // [ 'Charlie', 'Bob', 'Alice' ]
```
# Array Iteration with shift
In TypeScript, you can use the shift method to remove the first element from an array and returns that element:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let name = names.shift();
```
# Array Iteration with slice
In TypeScript, you can use the slice method to select a part of an array, and returns the new array:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let newNames = names.slice(1, 2);
console.log(newNames); // [ 'Bob' ]
```
# Array Iteration with sort
In TypeScript, you can use the sort method to sort the elements of an array:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
names.sort();
console.log(names); // [ 'Alice', 'Bob', 'Charlie' ]
```
# Array Iteration with splice
In TypeScript, you can use the splice method to add and remove elements from an array:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
names.splice(1, 0, "Dave");
console.log(names); // [ 'Alice', 'Dave', 'Bob', 'Charlie' ]
```
# Array Iteration with unshift
In TypeScript, you can use the unshift method to add one or more elements to the beginning of an array and returns the new length of the array:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let length = names.unshift("Dave");
console.log(length); // 4
console.log(names); // [ 'Dave', 'Alice', 'Bob', 'Charlie' ]
```
# Array Iteration with every
In TypeScript, you can use the every method to check if all elements in an array pass a test:
```
let names: string[] = ["Alice", "Bob", "Charlie"];
let allLongerThanThree = names.every(name => name.length > 3);
console.log(allLongerThanThree); // false
```