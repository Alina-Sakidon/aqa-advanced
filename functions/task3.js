function checkOrder(available, ordered) {
    return ordered === 0
        ? 'Your order is empty.'
        : available >= ordered
            ? 'Your order is accepted.'
            : 'Your order is too large, we don’t have enough goods.';
}

console.log(checkOrder(100, 50));
console.log(checkOrder(100, 150));
console.log(checkOrder(100, 0));