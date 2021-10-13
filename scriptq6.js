


/* 6 – Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve clacular
a média alcançada por aluno e apresentar:
a) A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete.
b) A mensagem “Reprovado”, se a média for menor do que sete.
c) A mensagem “Aprovado com distinção”, se a média for igual a dez. */

function avaliacao(){ 
  let primeiraNota= parseFloat(window.prompt("Digite  a nota da primeira atividade: "))
  let segundaNota=parseFloat(window.prompt( " Digita a nota da segunda atividade: "))

  let mediaFinal= (primeiraNota+segundaNota)/2
  console.log(mediaFinal)

  if( mediaFinal == 10){
    console.log(" O aluno foi aprovado com louvor")
  }else if(mediaFinal < 7){
    console.log("O aluno foi reprovado, infelizmente")
  }else{

  console.log("O Aluno foi aprovado com média")
  }
 console.log( primeiraNota)
  
}

avaliacao(0)
 
