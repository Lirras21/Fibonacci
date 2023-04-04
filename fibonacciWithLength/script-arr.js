import {generateFibonacciTimes} from './script-str.js';

export function transformStrToArr(n) {
    let a = generateFibonacciTimes(n);
    let arrA = a.split();
    return ('transformStrToArr', arrA);
}
transformStrToArr(10);