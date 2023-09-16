// Array para almacenar los elementos como objetos
var elementos = [];

// Función para agregar un elemento
function agregarElemento() {
    var id = document.getElementById("id").value;
    var nombre = document.getElementById("product-name").value;
    var descripcion = document.getElementById("description").value;

    if (id.trim() !== "" && nombre.trim() !== "" && descripcion.trim() !== "") {
        var elemento = {
            id: id,
            nombre: nombre,
            descripcion: descripcion
        };

        elementos.push(elemento);
        actualizarTabla();
        document.getElementById("id").value = "";
        document.getElementById("product-name").value = "";
        document.getElementById("description").value = "";
    }
}

function LimpiarCasillas() {
    document.getElementById("id").value = "";
    document.getElementById("product-name").value = "";
    document.getElementById("description").value = "";
}