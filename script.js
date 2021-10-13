
function media() {

let total = 0;
let numero_de_notas =4

for(let i=0; i<numero_de_notas; i++){
  var nota = window.prompt(" Diga a nota")
      total+=parseFloat(nota);
      
  }

console.log("A Media  é igual a " +total/4)

}

media()