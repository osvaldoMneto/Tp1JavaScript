
 
/* q8 8 – Faça um programa que peça os 3 lados de um triângulo. O programa deverá informar se os 
valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: 
“Equilátero”, “Isósceles” ou “Escaleno”.
Dicas: 
I – Três lados formam um triângulo quando a soma de quaisquer dois lados for 
maior que o terceiro.
II – Triângulo Equilaátero: Três lados iguais.
III – Triângulo Isósceles: Quaisquer dois laods iguais.
IV – Triângulo Escaleno: Três lados diferentes.

 */
function testaTriangulo(){

  let ladoA= window.prompt( "Digite o tamanho do lado A do triangulo")
  let ladoB = window.prompt("Digite o tamanho do lado B do tringulo")
  let ladoC = window.prompt("Digite o tamanho do lado C do tringulo")


  if( ladoA && ladoB && ladoC==ladoA){

    console.log( " Este Trinagulo é equilátero")
  }
  else if (ladoA>ladoB+ladoC||ladoC>ladoA+ladoB||ladoB>ladoA+ladoC){
    console.log(" Este triangulo não existe")
  }else{
    console.log(" Este triangulo é escaleno")

  }
}

testaTriangulo()