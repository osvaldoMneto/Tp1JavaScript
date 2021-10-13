/* q3 – Faça um programa que peça dois números e imprima o maior deles */
function maiorNumero(){
let numA= prompt("Digite um número para A")

let numB=prompt("Digite um numero para B")
let maior = if(numA<numB){maior=numA}else{maior=numB} 

console.log(" o maior numero é" + maior)
}

maiorNumero()

