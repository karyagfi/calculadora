const num1 = document.getElementById('numero1');
const num2 = document.getElementById('numero2');
const btnSumar = document.getElementById('btn-sumar')
const btnRestar = document.getElementById('btn-restar')
const btnMultiplicar = document.getElementById('btn-multiplicar')
const btnDividir = document.getElementById('btn-dividir')
const resultadoValor = document.getElementById('resultado-valor')

btnSumar.addEventListener('click', () => {
  const resultado = Number(num1.value) + Number(num2.value)
  resultadoValor.innerText = resultado
})

btnRestar.addEventListener('click', () => {
  const resultado = Number(num1.value) - Number(num2.value)
  resultadoValor.innerText = resultado;
})

btnMultiplicar.addEventListener('click', () => {
  const resultado = Number(num1.value) * Number(num2.value)
  resultadoValor.innerText = resultado;
})

btnDividir.addEventListener('click', () => {
  const resultado = Number(num1.value) / Number(num2.value)
  resultadoValor.innerText = resultado;
})