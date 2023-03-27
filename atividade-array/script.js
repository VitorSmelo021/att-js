var objetos = [];
const text = document.getElementById('ip');

function add(){
if(text.value == ''){
alert("dê uma informação válida");
}
else {
    if(objetos.includes(text.value)){
        alert("Valor já existente");
    }
    else{
        objetos.push(text.value);
        document.getElementById('mostra').innerHTML = objetos
    }
    text.value="";
}
}
function ord(){
    objetos.sort();
    document.getElementById('mostra').innerHTML = objetos
}