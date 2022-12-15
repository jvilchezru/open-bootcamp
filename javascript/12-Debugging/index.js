function serieFibonacci(cant) {
  let a = 1;
  let b = 1;
  let c = 0;
  let listNum = [];

  for (let i = 1; i <= cant; i++) {
    listNum = [...listNum, a];
    c = a + b;
    a = b;
    b = c;
  }

  return listNum;
}

console.log(serieFibonacci(6));
