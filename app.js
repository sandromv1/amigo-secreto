let amigos = [];

function agregarAmigo() {
    let amigosIncluidos = document.getElementById('amigo').value;
    
    if (amigosIncluidos == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        // Se incluye al amigo en la lista
        amigos.push(amigosIncluidos);
        limpiarCaja();
        actualizarListaAmigo();
    }

    console.log(amigos); // Ahora imprime el array actualizado
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function actualizarListaAmigo() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpia la lista para evitar duplicados

    amigos.forEach((amigo) => {
        const elemento = document.createElement('li'); // Crea un nuevo elemento de lista
        elemento.textContent = amigo; // Asigna el nombre del amigo como texto del elemento
        lista.appendChild(elemento); // Agrega el elemento a la lista
    });
}

function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos un amigo.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
