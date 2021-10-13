/* q7 – Faça um programa que imprima “Bom dia”, “Boa tarde” ou “Boa noite” dependendo da hora 
do dia. Dica: use a classe Date. */
function horadoDia() {
let hora = prompt("Que horas são?");
let horadia = new Date()
if (hora<12){
console.log("Bom dia!!" + new Date())
} else if(hora>18){
  console.log("Boa noite!")
}else{ console.log("Boa Tarde!")} 


}

horadoDia()