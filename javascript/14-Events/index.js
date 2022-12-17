const boton = document.querySelector("button")

boton.addEventListener("click", () => {
  alert("click en el botón");
})

// jQuery
$("button").click(function (e) {
  console.log("Hola, estoy utilizando jQuery");
});

