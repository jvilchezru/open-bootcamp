// Variable que contiene la lista de compra (mín. 5 elementos)
const shoppingList = ["Arroz", "Azúcar", "Leche", "Huevos", "Galletas"];

// Adicionar a la lista "Aceite de Girasol"
shoppingList.push("Aceite de Girasol");

// Eliminar de la lista "Aceite de Girasol"
shoppingList.pop();

// Lista de 3 películas favoritas (objetos con propiedades: título, director, fecha)
const movieList = [
  { title: "Avatar", director: "James Cameron", date: new Date(2009, 11, 18) },
  {
    title: "Volver al futuro",
    director: "Robert Zemeckis",
    date: new Date(1985, 6, 3),
  },
  {
    title: "Hasta el último hombre",
    director: "Mel Gibson",
    date: new Date(2016, 9, 16),
  },
];

// Lista que contiene las películas posteriores al 1 de enero de 2010 (filter)
const filterArray = movieList.filter((obj) => obj.date > new Date(2010, 0, 1));

// Lista que contiene los directores de la lista de películas original (map)
const directorList = movieList.map((obj) => obj.director);

// Lista que contiene los títulos de la lista de películas original (map)
const titleList = movieList.map((obj) => obj.title);

// Lista que concatena la lista de directores y la lista de los títulos (concat)
const concatList = directorList.concat(titleList);

// Lista que concatena la lista de directores y la lista de los títulos (factor de propagación)
const propagationList = [...directorList, ...titleList];
