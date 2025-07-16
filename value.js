const person = {
  name: 'Rahim Uddin',
  age: 25,
  profession: 'developer',
  salary: 50000,
  married: true,
  'fav places': ['spain', 'france', 'italy']
}

person.salary = 75000;
person['age'] = 26;
person['fav places'] = ['switzerland', 'denmard', 'finland'];

console.log(person);


const keyName = 'profession';
// console.log(person[keyName]);

const propName = 'profession';
person[propName] = 'devOps';
console.log(person);