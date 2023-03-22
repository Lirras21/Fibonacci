
function generateFibonacci(num) {
    let a = 0,
        b = 1,
        c,
        str = [];
        
    for (let i = 1; i <= num; i++) {
            c = a + b;
            a = b;
            b = c;
            str += a + ", ";
            if (str.length === num) {
                break;
            }
    }
    console.log(str);
}
generateFibonacci(8);



function generateFibonacciTimes(num) {
    let a = 0,
        b = 1,
        c,
        str = "";
    for (let i = -1; i < num - 1; i++) {
        c = a + b;
        a = b;
        b = c;
        str += a + ', ';
    }
    console.log(str);
}
generateFibonacciTimes(10);


function fibonacci(n) {
    let fibArray = [0, 1];
    let i = 2;
    while (fibArray[i - 1] < n) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
      i++;
    }
    console.log(fibArray.slice(0, i - 1));
  }
  fibonacci(100);