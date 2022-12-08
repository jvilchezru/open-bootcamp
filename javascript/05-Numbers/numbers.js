// Variable que contiene mi altura en centímetros (entero)
let height_cm = 165;
console.log(height_cm);

// Variable que contiene mi altura en metros (número de coma flotante)
let height_m = height_cm / 100;
console.log(height_m);

// Variable que contiene mi peso en kilogramos (número de coma flotante)
let weight_kg = 56.7;
console.log(weight_kg);

// Variable que contiene mi altura en metros redondeada hacia arriba
let height_m_up = Math.ceil(height_m);
console.log(height_m_up);

// Variable que contiene mi altura en metros redondeada hacia abajo
let weight_kg_down = Math.floor(weight_kg);
console.log(weight_kg_down);

// Variable que contiene si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let isEquals = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(isEquals);
