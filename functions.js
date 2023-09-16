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

borrarElemento() {
    var elementoSeleccionado = document.querySelector('input[name="elemento"]:checked');
    if (elementoSeleccionado) {
        var indice = elementoSeleccionado.value;
        elementos.splice(indice, 1);
        actualizarTabla();
        document.getElementById("id").value = "";
        document.getElementById("product-name").value = "";
        document.getElementById("description").value = "";
    }
}
// Función para actualizar la tabla en el HTML
function actualizarTabla() {
    var elementTable = document.getElementById("element-table");
    var tbody = document.getElementById("element-list");
    tbody.innerHTML = "";

    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];
        var row = tbody.insertRow(i);
        var cellId = row.insertCell(0);
        var cellNombre = row.insertCell(1);
        var cellDescripcion = row.insertCell(2);
        var cellAcciones = row.insertCell(3);

        cellId.innerHTML = elemento.id;
        cellNombre.innerHTML = elemento.nombre;
        cellDescripcion.innerHTML = elemento.descripcion;
        cellAcciones.innerHTML = '<input type="radio" name="elemento" onclick=MostrarInfoC(); value="' + i + '">';
    }
}

// Inicializar la tabla al cargar la página
actualizarTabla();

// Función para editar un elemento
function editarElemento() {
    var elementoSeleccionado = document.querySelector('input[name="elemento"]:checked');
    if (elementoSeleccionado) {
        var indice = elementoSeleccionado.value;
        var elemento = elementos[indice];
        var nuevoID = document.getElementById("id").value;
        var nuevoNombre = document.getElementById("product-name").value;
        var nuevaDescripcion = document.getElementById("description").value;
        if (nuevoID !== null && nuevoNombre !== null && nuevaDescripcion !== null) {
            elementos[indice] = {
                id: nuevoID,
                nombre: nuevoNombre,
                descripcion: nuevaDescripcion
            };
            document.getElementById("id").value = "";
            document.getElementById("product-name").value = "";
            document.getElementById("description").value = "";
            actualizarTabla();
        }
    }
}

function MostrarInfoC() {
    var elementoSeleccionado = document.querySelector('input[name="elemento"]:checked');
    if (elementoSeleccionado) {
        var indice = elementoSeleccionado.value;
        var elemento = elementos[indice];
        document.getElementById("id").value = elemento.id;
        document.getElementById("product-name").value = elemento.nombre;
        document.getElementById("description").value = elemento.descripcion;
    }
}
