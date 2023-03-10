import validator from './validator.js';

const inputTarjeta= document.getElementById ('card-number')
const pNumeroT= document.getElementById ('numero-tarjeta')
const labelValidacion= document.getElementById ('validacion')

inputTarjeta.addEventListener('input', function (evento) {
  const creditCardNumber = evento.target.value;
  pNumeroT.innerText = validator.maskify(creditCardNumber)
  const valid = validator.isValid(creditCardNumber);
  if (valid) {
    labelValidacion.innerText = "El número de tarjeta de crédito es válido"
  }else {
    labelValidacion.innerText = "El número de tarjeta de crédito No es válido"
  }
});
