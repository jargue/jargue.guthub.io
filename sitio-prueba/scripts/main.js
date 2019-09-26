//var miTitulo = document.querySelector('h1');
//miTitulo.innerHTML = 'Hello world!';

//document.querySelector('html').onclick = function(h4) {
//    alert('Ouch! Deja de pincharme!');
//}

var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/mi-imagen.png') {
      miImage.setAttribute('src','images/firefox2.png');
    } else {
      miImage.setAttribute('src', 'images/mi-imagen.png');
    }
}
var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es mucho mejor,' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es mucho mejor,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}