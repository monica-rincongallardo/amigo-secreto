// crear un array para almacenar los nombres
let amigos = [];

// función para agregar amigos
function agregarAmigo() {
  //capturar el valor del campo de entrada
  const input = document.getElementById("amigo");
  const nombre = input.value.trim(); //eliminar los espacios en blanco

  // validar la entrada
  if (nombre === "") {
    // si está vacío, mostrar un alert con un mensaje
    alert("Por favor, inserte un nombre.");
    return;
  }

  // actualizar el array de amigos
  amigos.push(nombre);
  console.log("Lista de amigo: ", amigos);

  // limpiar el campo de entrada
  input.value = "";
}
