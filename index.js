

function calcular() {
    let nome = document.querySelector('#nome').value;
    let altura = parseFloat(document.querySelector('#altura').value);
    let peso = parseFloat(document.querySelector('#peso').value);
    let imc = peso / (altura * altura);

    if (isNaN(imc)) {
        document.querySelector('#box4').innerHTML = '<p>Digite um número válido. </p>'
    }

    else {



        if (imc < 17) {
            document.querySelector('#box4').innerHTML = '<p>Diagnóstico: Está muito abaixo do peso</p>'
        }
        if (imc > 17 && imc < 18.49) {
            document.querySelector('#box4').innerHTML = '<p>Diagnóstico: Está abaixo do peso</p>'
        }
        if (imc > 18.5 && imc < 24.99) {
            document.querySelector('#box4').innerHTML = '<p>Diagnóstico: Está no peso normal</p>'
        }
        if (imc > 25 && imc < 29.99) {
            document.querySelector('#box4').innerHTML = '<p>Diagnóstico: Está acima do peso</p>'
        }
        if (imc > 30 && imc < 34.99) {
            document.querySelector('#box4').innerHTML = '<p>Diagnóstico: Obesidade |</p>'
        }
        if (imc > 35 && imc < 39.99) {
            document.querySelector('#box4').innerHTML = '<p>Diagnóstico: Obesidade ||</p>'
        }
        if (imc > 40) {
            document.querySelector('#box4').innerHTML = '<p>Diagnóstico: Obesidade |||</p>'
        }


        document.querySelector('#box3').innerHTML = '<p>Olá ' + nome + '</p>' + '<h1>Seu IMC é: </h1>' + imc.toFixed(2);
    }
}