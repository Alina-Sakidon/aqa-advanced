function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('Division by zero');
    }
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Invalid value, please enter a numbers');
    }
    return numerator / denominator;
}

function divideWithTryCatch(numerator, denominator) {
    try {
        const result = divide(numerator, denominator);
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Operation is finished");
    }
}

divideWithTryCatch(10, 2);
divideWithTryCatch(10, 0);
divideWithTryCatch(10, '2');