const nome = document.getElementById("nome-carros");
var preco = document.getElementById("Preco");

function toque() {
  var total = preco.value;
  var metade = total / 2;
  var parcela = metade / 12;

  document.getElementById("nome-carro").innerHTML = nome.value;
  document.getElementById("50").innerHTML = `${Math.floor(
    metade
  )} entrada`;
  document.getElementById("parcela").innerHTML = `${Math.floor(
    parcela
  )} parcela`;
}
