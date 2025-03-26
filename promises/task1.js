function printText(text,miliseconds){
    setTimeout(() => {
        console.log(text);
    }, miliseconds);
}

printText('Hello', 1000);
printText('World', 2000);
printText('!', 3000);