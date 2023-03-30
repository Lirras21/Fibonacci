function fibonacciDoWhileLoop(n) {
    let a = 0,
        b = 1,
        c,
        str = '';
      do {
        c = a + b;
        a = b;
        b = c;
        str += a + ', ';
      } while (c < n);
      return str;
  }
  module.exports = { fibonacciDoWhileLoop };