const users = [
  { name: "Alina", email: "alinasakidon@gmail.com", age: 25 },
  { name: "Illia", email: "illia@mail.com", age: 22 },
  { name: "Kate", email: "ka@mail.com", age: 30 },
  { name: "Mark", email: "ma@mail.com", age: 28 },
];

for (const user of users) {
  console.log(`Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`);
}

for (const { name, email, age } of users) {
  console.log(`${name} is ${age} years old and has email ${email}`);
}
