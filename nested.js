const college = {
  name: 'vnc',
  class: ['11', '12'],
  events: ['science fair', 'victory day'],
  unique: {
    color: 'blue',
    result: {
      gpa: 5,
      merit: 'top'
    }
  }
}

// console.log(college.unique.color);
college.unique.result.merit = 'top top most';
console.log(college.unique.result.merit);
college.events[1] = 'Holiday';
console.log(college.events[1]);

delete college.class;
console.log(college);