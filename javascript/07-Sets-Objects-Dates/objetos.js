const myData = {
  name: "Jesus",
  lastname: "Vilchez",
  age: 21,
  height: 165,
  isDeveloper: true,
};

const age = myData.age;
console.log(age);

const list = [
  { ...myData },
  {
    name: "Ana",
    lastname: "Galan",
    age: 20,
    height: 150,
    isDeveloper: false,
  },
  {
    name: "Edwin",
    lastname: "Querevalu",
    age: 22,
    height: 163,
    isDeveloper: true,
  },
];

const orderedList = list.sort((a, b) => b.age - a.age);

console.log(orderedList);
