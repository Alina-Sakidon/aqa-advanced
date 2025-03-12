function printNumber(number) {
    console.log(number);
    if (number > 0) {
        printNumber(number - 1);
    }
  }

  printNumber(5);
