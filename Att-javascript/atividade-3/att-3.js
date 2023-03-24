const quilos = document.getElementById("quilo");
var gramas = document.getElementById("gramas");

function toque() {
  var peso = gramas.value / 1000;
  var valor = peso * quilos.value;

  document.getElementById("result").innerHTML = `Valor a Pagar R$ ` + valor
 ;
}
