document.getElementById('camisa').addEventListener('change', function() {
    var tallaLabel = document.querySelector('label[for="talla"]');
    var tallaInput = document.getElementById('talla');

    if (this.value === 'si') {
        tallaLabel.style.display = 'block';
        tallaInput.style.display = 'block';
    } else {
        tallaLabel.style.display = 'none';
        tallaInput.style.display = 'none';
    }
});

function validarFormulario() {
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var edad = document.getElementById('edad').value;
  var sexo = document.getElementById('sexo').value;
  var ciudad = document.getElementById('ciudad').value;
  var celular = document.getElementById('celular').value;
  var transporte = document.getElementById('transporte').value;
  var camisa = document.getElementById('camisa').value;
  var talla = document.getElementById('talla').value;
  var comentarios = document.getElementById('comentarios').value;

  if (nombre === "" || apellido === "" || edad === "" || sexo === "" || ciudad === "" || celular === "" || transporte === "" || camisa === "" || comentarios === "") {
      alert("Por favor, complete todos los campos.");
      return false;
  }

  if (edad < 18 || edad > 60) {
      alert("La edad debe estar entre 18 y 60 años.");
      return false;
  }

  if (celular.length !== 10) {
      alert("El número de celular debe tener 10 dígitos.");
      return false;
  }

  if (camisa === "si" && talla === "") {
      alert("Por favor, seleccione una talla.");
      return false;
  }

  alert("Formulario enviado con éxito.");
  return true;
}
