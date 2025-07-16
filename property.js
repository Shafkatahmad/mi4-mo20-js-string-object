const person = {
  name: 'Rahim Uddin',
  age: 25,
  profession: 'developer',
  salary: 50000,
  married: true,
  'fav places': ['spain', 'france', 'italy']
}

// console.log(person);

// dot notation
// console.log(person.profession);
const income = person.salary;
// console.log(income);

console.log(person['age']);
const boyos = person['age'];
console.log(boyos);
console.log(person['fav places']);