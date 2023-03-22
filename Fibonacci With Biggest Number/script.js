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
