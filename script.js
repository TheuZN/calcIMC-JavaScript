let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")

let resultado = document.getElementById("resultado")

function calculo() {
    console.log("Calculando...")

    let peso = inputPeso.value;
    let altura = inputAltura.value;

    let total = (peso / (altura*altura)).toFixed(2);

    if (total >= 0.00 && total <= 18.5) {
        resultado.innerHTML = `<p> Seu IMC é ${total} - Você está abaixo do peso</p>`;
    }

    else if (total >= 18.6 && total <= 24.99) {
        resultado.innerHTML = `<p> Seu IMC é ${total} - Você está com o peso normal</p>`;
        }

    else if (total >= 25 && total <= 29.99) {
        resultado.innerHTML = `<p> Seu IMC é ${total} - Você está com sobrepeso</p>`;
    }

    else if (total >= 30 && total <= 34.99) {
        resultado.innerHTML = `<p> Seu IMC é ${total} - Você está em estado de obesidade I</p>`;
    }

    else if (total >= 35 && total <= 39.99) {
        resultado.innerHTML = `<p> Seu IMC é ${total} - Você está em estado de obesidade II</p>`;
    }

    else if (total >= 40) {
        resultado.innerHTML = `<p> Seu IMC é ${total} - <br> Você está em estado de obesidade III</p>`;
    }

    else {
        resultado.innerHTML = `<p>Por favor, verifique as informações.</p>`;    }
}