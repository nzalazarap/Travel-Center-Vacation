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
  
  // Obtener los elementos del DOM
const formulario = document.querySelector('#formulario');
const pasos = formulario.querySelectorAll('.paso');
const siguienteBotones = formulario.querySelectorAll('button[id^="siguiente"]');
const anteriorBotones = formulario.querySelectorAll('button[id^="anterior"]');
const generarPdfBoton = document.querySelector('#generar-pdf');

function mostrarPaso(paso) {
  // Ocultar todos los pasos
  for (let i = 0; i < pasos.length; i++) {
    pasos[i].classList.add('oculto');
  }

  // Mostrar el paso actual
  paso.classList.remove('oculto');
}
