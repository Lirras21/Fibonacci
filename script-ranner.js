// window.generateFibonacciLength(20);
// window.generateFibonacciTimes(20);
// window.fibonacciRecursion(20);
// window.fibonacciWhileLoop(20);
// window.fibonacciDoWhileLoop(20);

const {generateFibonacciTimes} = require('./fibonacciWithLength/script'),
      {generateFibonacciLength} = require('./fibonacciWithBiggestNumber/script'),
      {fibonacciWhileLoop} = require('./fibonacciWhileLoop/script'),
      {fibonacciDoWhileLoop} = require('./fibonacciDoWhileLoop/script'),
      {fibonacciRecursion} = require('./fibonacciWithRecursion/script');

generateFibonacciTimes();
generateFibonacciLength();
fibonacciWhileLoop();
fibonacciDoWhileLoop();
fibonacciRecursion();