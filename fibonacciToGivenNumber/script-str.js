export function getFibonacciNumbers(n) {
  let a = 0,
      b = 1,
      c,
      str = '';
    do {
      if (str !== '') {
        str += ', ';
      }
      c = a + b;
      a = b;
      b = c;
      str += a;
  } while (c < n);
  return str;
}

export function createFibonacci(n) {
  let a = 0,
      b = 1,
      c = 1,
      str = '';
    while(c <= n) {
      if (str !== '') {
        str += ', ';
      }
    c = a + b;
    a = b;
    b = c;
    str += a;
    }     
  return str;
}

export function generateFibonacciLength(n) {
    let a = 0,
        b = 1,
        c,
        str = '';
    for (let i = 0; i <= n; i++) {
      if (str !== '') {
        str += ', '
      }
      c = a + b;
      a = b;
      b = c;
      str += a;
      if (a > n ) {
        break;
      }
    }
    return str;
}

