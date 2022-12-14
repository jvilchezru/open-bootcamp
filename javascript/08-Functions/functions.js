// Función sin parámetros que devuelva siempre true
function returnTrue() {
  return true;
}

console.log(returnTrue());

// Función asíncrona que utilice setTimeout y pase por consola una "Hola soy una promesa" 5 segundos desúés de haberse ejecutado
async function myPromise() {
  return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}

myPromise();

// Función generadora de índices pares automáticos
function* generadorIndice() {
  let indice = 0;
  while (true) {
    yield (indice += 2);
  }
}

const gen = generadorIndice();

console.log(gen.next().value);
console.log(gen.next().value);
