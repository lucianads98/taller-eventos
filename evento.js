
function saludar(event) {
    event.stopPropagation(); 
    alert('¡Hola!');
}

document.getElementById('contenedor-boton').addEventListener('click', function() {
    alert('¡Hola! Soy el div');
});


document.getElementById('miBoton').addEventListener('click', saludar);