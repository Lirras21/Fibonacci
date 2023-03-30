function generateFibonacciLength(num) {
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
  return str;
}
module.exports = { generateFibonacciLength };

