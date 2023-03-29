function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  function printFibonacciNumbers(n) {
    for (let i = 0; i < n; i++) {
      console.log(`Fibonacci(${i}): ${fibonacci(i)}`);
    }
  }
  
  printFibonacciNumbers(10);
  