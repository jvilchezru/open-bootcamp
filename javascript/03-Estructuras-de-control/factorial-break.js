let cont = 1;
let factorial = 1;

while (true) {
  if (cont > 10) break;

  factorial *= cont;
  cont++;
}

console.log(`El factorial de 10 es ${factorial}`);
