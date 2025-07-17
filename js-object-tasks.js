// accessing a value from an object
const colors = {
  red:  "#ff0000",
  green: "#00ff00",
  blud: "#0000ff",
  "golden rod": '#daa520'
}

// console.log(colors['golden rod']); // use square bracket because "golden rod" key has a white space between it.


// adding a property with value
const car = {
  make: "Toyota",
  model: "Corolal",
  year: 2020
}

car["passenger capacity"] = 5;
// console.log(car);


// display a key of a nested object
const student = {
  name: 'Hamim Sakep',
  id: 5421,
  physics: {
    subject: 'HSC Physics',
    author: 'Shahjahan Tapan',
    marks: 30
  }
}

// console.log(student.physics.marks);


// count the number of property of an Object
let Student = {
  name: 'Ariana Grande',
  age: 21,
  city: 'Paris',
  isStudentd: true
}

let numOfProperties = 0;
for(let number in Student) {
  numOfProperties++;
}
// console.log(numOfProperties);


// print the key and the typeOf value
/**
 * Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

Output:


key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean
 */
let myObject = {
  name: 'John Doe',
  age: 25,
  city: 'New York',
  isStudent: true
}
let x = 'hello';
// console.log(typeof(Object.values(myObject)));
// console.log(typeof(myObject.name));
// console.log(typeof(Object.values(myObject)));

const keys = Object.keys(myObject);
for(const key of keys) {
  console.log('key: ', key, ' | type: ', typeof(myObject[key]));
}