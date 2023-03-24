const nome = document.getElementById("nome-carros");
var preco = document.getElementById("Preco");

function toque() {
  var total = preco.value;
  var metade = total / 2;
  var parcela = metade / 12;

  document.getElementById("nome-carro").innerHTML = nome.value;
  document.getElementById("50").innerHTML =
    metade + ` entrada`;
  document.getElementById("parcela").innerHTML = 
  `12x de ` + parcela ;
}
