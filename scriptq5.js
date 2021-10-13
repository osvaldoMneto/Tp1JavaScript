


//q5- Faça um programa que diga se uma letra é vogal ou consoante 
function verificarLetra(){

let letra =(prompt( "Entre com a Letra"))
letra = letra.toLowerCase()

let vogais =[ "a", "e", "i", "o", "u"]

if (vogais.includes(letra)){

  console.log( "Essa Letra é uma vogal")

}else{
  console.log("Essa letra é consoante")
}

}

verificarLetra()


