# Function
TypeScript has a specific syntax for typing function parameters and return values.
## Return Type
The type of the value returned by the function can be explicitly defined.
```
function add(a: number, b: number): number {
    return a + b;
}
```
## Void Return Type
The type void can be used to indicate a function doesn't return any value.
```
function printResult(num: number): void {
    console.log('Result: ' + num);
}
```
