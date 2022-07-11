const fibonacciSerries = {
  
  [Symbol.iterator]() {
    
    let number1 = 0, number2 = 1;

    return {

      next() {
        [value, number1, number2] = [number1, number2, number1 + number2];
        return { value };
      }

    }

  }
}

for (const value of fibonacciSerries) {
  
  if (value > 50)
    break;
  
  console.log(value)

}