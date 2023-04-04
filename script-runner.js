//IMPORT функцій які повертають строки ""
import {getFibonacciNumbers} from './fibonacciToGivenNumber/script-str.js';
import {createFibonacci} from './fibonacciToGivenNumber/script-str.js'
import {generateFibonacciLength} from './fibonacciToGivenNumber/script-str.js'
import {generateFibonacciTimes} from './fibonacciWithLength/script-str.js'
// IMPORT функцій які повертають масиви []
import {generateFibonacciArr} from './fibonacciToGivenNumber/script-arr.js'
import {transformStrToArr} from './fibonacciWithLength/script-arr.js'


// Виклик функцій які повертають строкові значення 
function runFibonacciInString(n) {
  let a = getFibonacciNumbers(n);
  console.log('getFibonacciNumbers', a);
  let b = createFibonacci(n);
  console.log('createFibonacci', b);
  let c = generateFibonacciLength(n);
  console.log('generateFibonacciLength', c);
  let d = generateFibonacciTimes(n);
  console.log('generateFibonacciTimes', d);
}
runFibonacciInString(20);
// Виклик функцій які повертають  значення в вигляді масивів
function runFibonacciInArray(n) {
  let a = generateFibonacciArr(n);
  console.log('generateFibonacciArr', a);
  let b = transformStrToArr(n);
  console.log('transformStrToArr', b);
}
runFibonacciInArray(10);