

// funções são um conjunto de ações que so executam quando chamada 
console.log("=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8")

torrar()
//chamando a afunção (torrar)



/*Ao declarar a fuçção devemos ter cuidado de não comesar comm um numero 
dentro de uma função pode ser chamdo outras funcoes e colocado outras linhas 
de codigo , porem o indicado é que a função se refira a uma ação especifica e todo 
as demasi linhas de codigos dentro dela se refira ao mesma ação 
*/
function torrar(){
 console.log("torrando pão")
 injetarPao()
}
//declarando a função torrar ao mesmo que chama a função injetandoPão 



function injetarPao(){
	console.log("preparando para injetar o pão")
    console.log("finalizado")
}
//declarando a função Injetarpão


//funçoes criam atalhos para a utilização d e codigos em qualquer momento agilizando a criação do programma 

console.log("=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8")

// funcão com parametros 

//declarar uma função com pararmetrro onde dizemos ola a alguem (parametro nome)
function dizerOla(nome) {
    console.log("Olá, " + nome + "! Como você está?");
  }
  dizerOla("Pedrinho"); // Vai dizer Olá, Pedrinho! Como você está?
  dizerOla("Mariana"); // Vai dizer Olá, Mariana! Como você está?


  // podemos dar masi de uma parametro para umama função e dentor dela crias  linhas de codigos para utilizar esses paramemtro 

  function calcularIdade(nome, anoNascimento) {
    let idade = 2023 - anoNascimento;
    console.log(nome + " tem " + idade + " anos!");
  }
  

  calcularIdade("Pedrinho", 2010); // Vai mostrar Pedrinho tem 13 anos!
  calcularIdade("Mariana", 2008); // Vai mostrar Mariana tem 15 anos!


  console.log("=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8=8")



  // funcoes que trasemm trechos especicos de um parametro 
  let userName = getFirstName("Carlos-Almeida-Juanito-Gargalo", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Felipe Silva Han Solo", " ")
console.log("Seja bem vindo " + userName)

function getFirstName(name, splitChar){
	let firstName = name.split(splitChar)[0]
    return firstName
}


// tambem podesmos traser resultatdos de espreçoes realizxadas dentro de uma função 


function somar(numero1, numero2) {
  return numero1 + numero2;
}

let resultado = somar(5, 3); // A função vai dar de presente 5 + 3 = 8
console.log("A soma é: " + resultado); // Vai mostrar A soma é: 8

