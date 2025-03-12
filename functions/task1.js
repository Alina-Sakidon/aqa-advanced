//Function Declaration:
function calculateRectangleArea(height, width) {
  return height * width;
}

//Function Expression:
const rectangleAreaByExpression = function (height, width) {
  return height * width;
};

//Arrow Function:
const rectangleAreaByFunction = (height, width) => {
  return height * width;
};

console.log(calculateRectangleArea(10, 5)); 
console.log(rectangleAreaByExpression(10, 5)); 
console.log(rectangleAreaByFunction(10, 5));