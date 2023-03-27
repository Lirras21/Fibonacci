// виправив функцію
function generateFibonacci(num) {
  let a = 0,
      b = 1,
      c,
      str = [];
  for (let i = 0; i <= num; i++) {
          c = a + b;
          a = b;
          b = c;
          if (a > num ) {
              break;
          } else {
              str += a + ", ";
          }
  }
  console.log(str);
}
generateFibonacci(20);



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
