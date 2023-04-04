import {getFibonacciNumbers} from './script-str.js';
import {createFibonacci} from './script-str.js';
import {generateFibonacciLength} from './script-str.js';

// Перетворює повернення функцій в масиви
export function generateFibonacciArr (n) {
    let a = getFibonacciNumbers(n);
    let arrA = a.split();
    console.log('getFibonacciNumbers',arrA);
    let b = createFibonacci(n);
    let arrB = b.split();
    console.log('createFibonacci',arrB);
    let c = generateFibonacciLength(n);
    let arrC = c.split();
    console.log('generateFibonacciLength',arrC);
}
