// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigosIncluidos = document.getElementById('amigo').value;
    
    if (amigosIncluidos == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        // Se incluye al amigo en la lista
        amigos.push(amigosIncluidos);
        limpiarCaja();
    }

    console.log(amigos); // Ahora imprime el array actualizado
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
