const car1 = {
  brand: "BMW",
  model: "X5",
  year: 2021,
};

const car2 = {
  brand: "Citroen",
  model: "C3",
  owner: "Alina",
};

const car3 = { ...car1, ...car2 };
console.log(car3);
