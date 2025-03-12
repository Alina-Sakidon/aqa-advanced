const handleEven = () => {
    console.log("number is even");
}

const handleOdd = () => {
    console.log("number is odd");
}

function handleNum(number, handleEven, handleOdd) {
    return number % 2 === 0
        ? handleEven()
        : handleOdd();
};

handleNum(2, handleEven, handleOdd);
handleNum(3, handleEven, handleOdd);