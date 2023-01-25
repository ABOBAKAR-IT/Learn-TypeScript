# Object
In TypeScript, object types are used to define the structure of an object and the types of its properties. Object types can be defined using interfaces, type aliases, or classes.<br>
Example 1
```
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};
```
# Optional Properties
Optional properties are properties that don't have to be defined in the object definition.

When you declare a property with a `?`, it means that the property is optional, and it doesn't have to be included when an object is created.
```
const car: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
car.mileage = 2000;
```
