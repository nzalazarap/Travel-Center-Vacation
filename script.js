// CTA ¡QUIERO VIAJAR!
function enviarConsulta() {
  var destinatario = "info@travelcenter.com";
  var asunto = "Consulta de viaje";
  var cuerpo = "Hola,\n\nEstoy interesado en hacer una consulta sobre un viaje. ¿Podrían ayudarme?\n\nGracias,\n[Nombre]";

  var correo = "mailto:" + destinatario + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo);
  window.open(correo);
}


// VALIDACIÓN DE CAMPOS DEL FORM

$(document).ready(function() {
    $("#formulario").validate({
      rules: {
        nombre: "required",
        apellido: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        nombre: "Por favor, ingrese su nombre",
        apellido: "Por favor, ingrese su apellido",
        email: "Por favor, ingrese un correo electrónico válido"
      }
    });
  });
  
  // OBTENER LOS ELEMENTOS DEL DOM

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

  // AGREGAR EVENTO DE ESCUCHA PARA BOTÓN SIGUIENTE
for (let i = 0; i < siguienteBotones.length; i++) {
  siguienteBotones[i].addEventListener('click', function() {
    mostrarPaso(pasos[i+1]);
  });
}

  // MOSTRAR EL PASO ACTUAL
  paso.classList.remove('oculto');
}
