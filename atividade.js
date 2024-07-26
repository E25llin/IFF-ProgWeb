const saudacao = ["Maria Eduarda"]
function saudar (nome) {
     console.log(`Bom dia, ${nome} :) Seja bem vinda!`)
}
saudacao.forEach(saudar)

function meses (mes) {
  switch (mes) {
     case 1: 
          console.log("Número 1 = Janeiro")
          break;
     case 2: 
          console.log("Número 2 = Fevereiro")
          break;  
     case 3: 
          console.log("Número 3 = Março")
          break;
     case 4: 
          console.log("Número 4 = Abril")
          break;  
     case 5: 
          console.log("Número 5 = Maio")
          break;   
     case 6: 
          console.log("Número 6 = Junho")
          break;   
     case 7: 
          console.log("Número 7 = Julho")
          break;   
     case 8: 
          console.log("Número 8 = Agosto")
          break;   
     case 9: 
          console.log("Número 9 = Setembro")
          break;   
     case 10: 
          console.log("Número 10 = Outubro")
          break;   
     case 11: 
          console.log("Número 11 = Novembro")
          break;   
     case 12: 
          console.log("Número 12 = Dezembro")
          break;        
     default:
          console.log("Esse valor é inválido!")
          break;
    }

}
meses(4)

function numero (n1,n2) {
     if (n1 == NaN || n2 == NaN) {
       console.log("Esses valores são inválidos")
     }
     else if (n1 > n2) {
       console.log("O número um é maior que o dois")
    }
    else if (n1 < n2) {
       console.log("O número dois é maior que o um")
    }
}
numero(4,2)

function parametros (salario,  quantidadeDeHorasExtras, quantidadeDeFaltas) {
          var valorhoratrabalhada = salario / 176
          var valorfaltas = valorhoratrabalhada * quantidadeDeFaltas * 8
          var valorhoraextra = quantidadeDeHorasExtras * 1.5 * valorhoratrabalhada
          var salarioliquido = salario + valorhoraextra - valorfaltas

          console.log(`Salário: ${salario}\n-Salari oliquido:${salarioliquido}\n-Total em horas extras:${valorhoraextra}\n-Total em faltas:${valorfaltas}`);
 }
parametros(5000, 8, 1)

const lua = [2,4,67,8,9,90,0,"Dia","hoje","tio","yellow","ui"]
function retor (lua) {
console.log(`${lua[0]} ${lua [lua.length - 1]}`)
}
retor(lua)
