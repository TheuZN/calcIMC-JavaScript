let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")

let resultado = document.getElementById("resultado")

function calculo() {
    console.log("Calculando...")

    let peso = inputPeso.value;
    let altura = inputAltura.value;

    let total = (peso / (altura*altura)).toFixed(2);

    resultado.innerHTML = `<p> O resultado é ${total}</p>`;
}