// CTA ¡QUIERO VIAJAR!
function enviarConsulta() {
  var destinatario = "info@travelcenter.com";
  var asunto = "Consulta de viaje";
  var cuerpo = "Hola,\n\nEstoy interesado en hacer una consulta sobre un viaje. ¿Podrían ayudarme?\n\nGracias,\n[Nombre]";

  var correo = "mailto:" + destinatario + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo);
  window.open(correo);
}


// VALIDACIÓN DE CAMPOS DEL FORM  

const form = document.getElementById("formulario");
const nombres = document.getElementById("nombres");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nombre.value.trim() === "") {
    alert("Por favor, ingrese su nombre.");
    return;
  }

  if (apellido.value.trim() === "") {
    alert("Por favor, ingrese su apellido.");
    return;
  }

  if (email.value.trim() === "") {
    alert("Por favor, ingrese su correo electrónico.");
    return;
  }

  if (!validarEmail(email.value)) {
    alert("Por favor, ingrese una dirección de correo electrónico válida.");
    return;
  }

  if (mensaje.value.trim() === "") {
    alert("Por favor, ingrese su mensaje.");
    return;
  }

  form.submit();
});

function validarEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

  
  /* OBTENER LOS ELEMENTOS DEL DOM. 
ACÁ SE USA EL MÉTODO QUERSELECTOR() Y QUERYSELECTORALL() PARA OBTENER ELEMNETOS DEL DOM.
TAMBIÉN SE USA UN BUCLE FOR PARA AGREGAR Y QUITAR LAS CLASES.*/
/* ADEMÁS SE AGREGA EL EVENTO DE ESCUCHA PARA QUE EL USUARIO USE LOS BOTONES SIGUIENTE 
  Y PUEDA AVANZAR EN EL FORM*/

const formulario = document.querySelector('#formulario');
const pasos = formulario.querySelectorAll('.paso');
const siguienteBotones = formulario.querySelectorAll('button[id^="siguiente"]');
const anteriorBotones = formulario.querySelectorAll('button[id^="anterior"]');
const generarPdfBoton = document.querySelector('#generar-pdf');

function mostrarPaso(paso) {
  // OCULTAR TODOS LOS PASOS
  
  for (let i = 0; i < pasos.length; i++) {
    pasos[i].classList.add('oculto');
  }

  
for (let i = 0; i < siguienteBotones.length; i++) {
  siguienteBotones[i].addEventListener('click', function() {
    mostrarPaso(pasos[i+1]);
  });
}

  // MOSTRAR EL PASO ACTUAL

  paso.classList.remove('oculto');
}


// OBTENER LOS ELEMENTOS DEL DOM

const formularioproceso = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const destino = document.querySelector('#destino');
const fecha = document.querySelector('#fecha');
const alojamiento = document.querySelector('#alojamiento');
const transporte = document.querySelector('#transporte');

// AGREGO EL ELEMENTO SUBMIT AL FORM

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // PREVENGO QUE EL FORM NO SE ENVIE DE MANERA AUTOMÁTICA
  
  if (validarNombre() && validarCorreo() && validarDestino() && validarFecha() && validarAlojamiento() && validarTransporte()) {
    // SÓLO SI TODOS LOS CAMPOS SON VÁLIDOS EL USUARIO PUEDE SEGUIR AVANZANDO
    avanzarPaso();
  }
});

// FUNCIONES CORRESPONDIENTES A LAS VALIDACIONES DE CAMPOS
function validarNombre() {
  const valor = nombre.value.trim(); // ELIMINO ESPACIOS EN BLANCO TANTO AL INICIO COMO AL FINAL
  
  if (valor === '') {
    mostrarError(nombre, 'Este campo es obligatorio');
    return false;
  }
  
  return true;
}

function validarCorreo() {
  const valor = correo.value.trim();
  
  if (valor === '') {
    mostrarError(correo, 'Este campo es obligatorio');
    return false;
  }
  
  // SE VALIDA EL FORMATO DEL EMAIL CON UNA EXPRESIÓN REGULAR 
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!expresionRegular.test(valor)) {
    mostrarError(correo, 'Ingrese un correo electrónico válido');
    return false;
  }
  
  return true;
}

function validarDestino() {
  const valor = destino.value.trim();
  
  if (valor === '') {
    mostrarError(destino, 'Este campo es obligatorio');
    return false;
  }
  
  return true;
}

function validarFecha() {
  const valor = fecha.value;
  
  if (valor === '') {
    mostrarError(fecha, 'Este campo es obligatorio');
    return false;
  }
  
  // VALIDACIÓN DE FECHA. QUE SEA POSTERIOR A LA FECHA ACTUAL EN LA QUE SE CONECTA EL USUARIO
  const fechaActual = new Date();
  const fechaSeleccionada = new Date(valor);
  if (fechaSeleccionada < fechaActual) {
    mostrarError(fecha, 'La fecha debe ser posterior a la fecha actual');
    return false;
  }
  
  return true;
}

function validarAlojamiento() {
  const valor = alojamiento.value.trim();
  
  if (valor === '') {
    mostrarError(alojamiento, 'Este campo es obligatorio');
    return false;
  }
  
  return true;
}

function validarTransporte() {
  const valor = transporte.value.trim();
  
  if (valor === '') {
    mostrarError(transporte, 'Este campo es obligatorio');
    return false;
  }
  
  return true;
}

// FUNCIÓN PARA MOSTRAR MENSAJE DE ERROR DEBJO DEL CAMPO CORRESPONDIENTE
function mostrarError(campo, mensaje) {
  const div = campo.parentElement;
  const mensajeError = div.querySelector('p');
  
  if (mensajeError) {
    mensajeError.textContent = mensaje;
  } else {
    const nuevoMensaje = document.createElement('p');
    nuevoMensaje.textContent = mensaje;
    nuevoMensaje.classList.add('error');
    div.appendChild(nuevoMensaje);
  }
}

// FUNCIÓN PARA AVANZAR AL SIGUIENTE PASO
function avanzarPaso() {
  // OBTENER EL PASO ACTUAL Y EL SIGUIENTE
  const pasoActual = document.querySelector('.paso:not(.oculto)');}