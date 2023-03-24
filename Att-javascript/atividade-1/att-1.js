const nome = document.getElementById("titulo-filme");
var time = document.getElementById("tempo");

function toque() {
  var total = time.value;
  var horas = total / 60;
  var minutos = Math.floor(total % 60);

  document.getElementById("nome-filme").innerHTML = nome.value;
  document.getElementById("result").innerHTML = `${Math.floor(
    horas
  )} horas ${Math.floor(minutos)} minutos`;
}
