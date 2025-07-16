const mobile = {
  brand: 'samsung',
  price: 2500,
  color: 'black',
  camera: '12mp',
  isNew: true
}

// for of : array
// for in : object
// for(const prob in mobile) {
//   console.log(prob);
//   console.log(mobile[prob]);
// }

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys) {
  console.log(key, ': ', mobile[key]);
}