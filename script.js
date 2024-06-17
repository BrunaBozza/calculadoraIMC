function calcular() {
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const classificacao = document.getElementById("classificacao");
  const resultado_imc = document.getElementById("resultado_imc");

  const resultado = peso / (altura * altura);
  resultado_imc.innerHTML = `Seu IMC é: ${resultado.toFixed(2)}`;

  if (resultado < 18.5) {
    classificacao.innerHTML = "Classificação: Magreza";
  } else if (resultado < 24.9) {
    classificacao.innerHTML = "Classificação: Normal";
  } else if (resultado < 29.9) {
    classificacao.innerHTML = "Classificação: Sobrepeso";
  } else if (resultado < 34.9) {
    classificacao.innerHTML = "Classificação: Obesidade grau 1";
  } else if (resultado < 39.9) {
    classificacao.innerHTML = "Classificação: Obesidade grau 2";
  } else {
    classificacao.innerHTML = "Classificação: Obesidade grau 3";
  }
}