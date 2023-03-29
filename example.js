function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

function main() {
  const a = 10;
  const b = 20;
  
  console.log("Sum:", sum(a, b));
  console.log("Product:", multiply(a, b));
  console.log("Quotient:", divide(a, b));
}

main();
