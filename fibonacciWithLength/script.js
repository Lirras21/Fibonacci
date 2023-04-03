export function generateFibonacciTimes(num) {
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
  return str;
}
