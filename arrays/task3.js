const baseArray = new Array(10, 20, 30, 40, 50);
const sum = baseArray.reduce((accumulator, value) => accumulator + value, 0);
console.log(`Sum of array's numbers is:`, sum);