function factorial(n) {
  let result = 1
  if (n > 1) {
    while (n) {
      result *= n;
      n--; 
  }
  return result
  }
  return 1
}

alert(factorial(1))