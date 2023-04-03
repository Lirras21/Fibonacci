export function fibonacciWhileLoop(n) {
  let a = 0,
      b = 1,
      c = 1,
      str = '';
  while(c <= n) {
    c = a + b;
    a = b;
    b = c;
    str += a + ', ';
  }
  return str;
}


