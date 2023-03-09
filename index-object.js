let name = "tai";
const person = {
  name: "dat",
  age: 20,
  introduce: function () {
    console.log(`my name is ${person.name}`);
    console.log(`my name is ${name}`);
    console.log(`I am ${person.age} yearsold`);
  },
};

person.introduce();
