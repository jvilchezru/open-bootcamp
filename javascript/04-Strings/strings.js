let nombre = "Jesus";
let apellido = "Vilchez";

// Cadena de texto concatenando nombre y apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

// Cadena de texto que contiene la cadena estudiante pero todo en mayúscula
let estudianteMayus = estudiante.toLocaleUpperCase();
console.log(estudianteMayus);

// Cadena de texto que contiene la cadena estudiante pero todo en minúscula
let estudianteMinus = estudiante.toLocaleLowerCase();
console.log(estudianteMinus);

// Variable que contiene el número de letras de la cadena "estudiante" contando los espacios
let numLetras = estudiante.length;
console.log(numLetras);

// Variable que contiene la primera letra del Nombre
let firstLetter = nombre[0];
console.log(firstLetter);

// Variable que contiene la última letra del Apellido
let lastLetter = apellido[apellido.length - 1];
console.log(lastLetter);

// Cadena de texto que elimina los espacios de la variable "estudiante"
let noSpaces = estudiante.replace(/ /g, "");
console.log(noSpaces);

// Variable booleana que dice si el Nombre está contenido en la variable "estudiante"
let isContained = estudiante.includes(nombre);
console.log(isContained);
