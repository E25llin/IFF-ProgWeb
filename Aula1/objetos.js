/*notação literal*/
const obj1 = {}
//console.log(obj1)
obj1.atrib1 = 10
//console.log(obj1)

/* Utilizando o new object */
//console.log(typeof new Object(), Object)
const obj2 = new Object()
//console.log(obj2, new Object(), Object)

function produto (nome, marca, custo, taxa) {
    this.nome = nome
    this.getPreco = ()=>{
        return custo*(1.3+taxa)
    }
    this.getMarca = function () {
        return marca 
    }
    
}
const p1 = new produto ('mouse', 'logitec', 100, 0.15)
console.log(p1.getPreco(), p1.getMarca())

/* 4- a partir da função factory */
function criarfuncionario (nome, salario, faltas) {
    return {
       nome, salario, faltas,
       getSalarioLiquido() {
        return (salario/30) * (30-faltas)
       }

    }
}
const funcionario = criarfuncionario('Evellin', 10000, 1)
console.log(funcionario.getSalarioLiquido())