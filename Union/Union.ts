let value:string|number;
value = 10;
console.log(value)
value = "abobakar";
console.log(value)

interface Dog {
    bark: () => void;
}
interface Cat {
    meow: () => void;
}
let pet: Dog | Cat;

pet = {
    bark: () => console.log('woof')
  
}
pet.bark();

pet = {
    meow: () => console.log('meow')
}
pet.meow();