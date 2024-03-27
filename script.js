function encriptar() {
  let textoOriginal = document.getElementById("texto").value.toLowerCase(); // Convertir a minúsculas
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  if (tieneAcento(textoOriginal)) { // Verificar si hay caracteres con acento
    swal("¡Atención! No se permiten caracteres con acento.");
    return;
  }

  let textoEncriptado = textoOriginal
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  document.getElementById("textoCifrado").value = textoEncriptado;

  if (textoOriginal.length != 0) {
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      document.querySelector('.btn-copiar').style.display = 'block';
  } else {
      muñeco.src = "img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  let textoEncriptado = document.getElementById("texto").value.toLowerCase(); // Convertir a minúsculas
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  if (tieneAcento(textoEncriptado)) { // Verificar si hay caracteres con acento
    swal("¡Atención! No se permiten caracteres con acento.");
    return;
  }

  let textoDesencriptado = textoEncriptado
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  document.getElementById("textoCifrado").value = textoDesencriptado;

  if (textoEncriptado.length != 0) {
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      document.querySelector('.btn-copiar').style.display = 'block';
  } else {
      muñeco.src = "img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function convertirAMinusculas() {
  let textarea = document.getElementById("texto");
  textarea.value = textarea.value.toLowerCase();
}

function tieneAcento(texto) {
  const acentos = /[áéíóú]/;
  return acentos.test(texto);
}

function copiarTexto() {
  var resultado = document.getElementById("textoCifrado");
  resultado.select();
  document.execCommand("copy");
  swal("Texto copiado: " + resultado.value);
}

document.addEventListener("keypress", function(event) {
  var mayusOn = event.getModifierState && event.getModifierState('CapsLock');
  if (mayusOn) {
      swal("¡Atención! La tecla Bloq Mayús está activada.");
  }
});
