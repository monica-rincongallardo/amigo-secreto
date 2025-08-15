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

  // actualizar lista de amigos
  actualizar();

  // limpiar el campo de entrada
  input.value = "";
}

// función para actualizar lista de amigos
function actualizar() {
    // obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar la lista existente

    // iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // agregar elementos a la lista
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
