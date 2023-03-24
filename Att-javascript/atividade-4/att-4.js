const nome = document.getElementById("titulo-remedio");
var precos = document.getElementById("preco");

function toque() {
    var promocao = Math.round(precos.value *2);

  document.getElementById("nome-remedio").innerHTML = nome.value;
  document.getElementById("result").innerHTML = 
    promocao
  };