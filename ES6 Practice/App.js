/* let and const
let myName="Nandkishor";
 console.log(myName);*/

/*Arrow function
 let printName=name=>{   //name is parameter. 
//     //if There is only one parameter, we can write name instead of (name)
// console.log(name);

 }

 printName("Nandkishor");*/

/*Arrow function with one parameter, only one statement in return


let printName=name=>name;

console.log(printName("Nandkishor"));*/

// Export and import

/*named import
import { sell, data as item } from "./sell.js";
//import * as bundle from "./sell.js";
sell(); //bundle.sell();
console.log(item); //bundle.data*/

/*//Default import
import person from "./customer.js";
//import ps from "./customer.js"
console.log(person); //ps*/

//spread and rest operator (...)
/*spread operator is used to split any object or array
let cars = ["BMW", "Mercedes"];
let newCars = [...cars, "Bentley", "Audi"]; //spread operator used here
console.log(newCars);

//for objects

let person = {
  name: "abc",
  age: 24,
};

let student = {
  ...person,
  profession: "student",
};
console.log(student);*/

/*Rest operator is used in function argument

let myFunction = (...all) => console.log(all);

myFunction("a", "b", 89);  */

// Array Destructuring
/*
let cars = ["BMW", "Audi","Mercedes"];
let [car1,.car2]=cars;
console.log(car1); */

//Object Destructuring
/*
let person = {
  name: "abc",
  age: 24,
};

let { name, age } = person;
console.log(name);
*/

// ****** MAP ******
/*
let array1 = [1, 2, 3, 4];
let array2=array1.map(x=>x**2)
// let array2 = array1.map(function (x) {
//   return x ** 2;
// });


console.log(array2);
*/

// ****** Filter ******
/*
let array1 = [1, 2, 3, 4];
let array2 = array1.filter((x) => x % 2 == 0);
console.log(array2);
*/