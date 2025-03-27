const users = [
  { firstname: "Alshay", lastname: "Saini", age: 26 },
  { firstname: "Donald", lastname: "Trump", age: 75 },
  { firstname: "Elon", lastname: "Musk", age: 50 },
  { firstname: "Deepika", lastname: "Padukune", age: 26 },
];

const fullNames = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(fullNames);

const lessthan30 = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstname);
  }
  return acc;
}, []);
console.log(lessthan30);
