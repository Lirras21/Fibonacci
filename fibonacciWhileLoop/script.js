window.fibonacciWhileLoop = function(n) {
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
};

window.fibonacciDoWhileLoop = function (n) {
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
};
