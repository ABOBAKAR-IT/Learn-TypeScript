# Enums
In TypeScript, an enum (short for "enumeration") is a way to define a set of named constants. Enums are a way of giving more friendly names to sets of numeric values.<br>
<br>
Enums come in two flavors `string` and `numeric`. Lets start with numeric.

## Numeric Enums - Default
By default, enums will initialize the first value to 0 and add 1 to each additional value:
```
enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
```
## Numeric Enums - Initialized
You can also manually set the value of each enum member:
```
enum CardinalDirections {
  North = 1,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
// logs 1
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
```
## Numeric Enums - Fully Initialized
You can assign unique number values for each enum value. Then the values will not incremented automatically:
```
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
```
## String Enums
Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
```
enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
```