function form () {
    console.log("Hello world!")
}
form()

function som (n1, n2) {
    console.log(`Soma dos valores: ${n1} + ${n2} = ${n1+n2}`)
}
som(15, 15)

function mult (n1, n2) {
    console.log(`Multiplicação dos valores: ${n1} * ${n2} = ${n1*n2}`)
}
mult(4, 4)

//exemplo
function exemplo () {
    console.log(this)
}
var exem = {
    nome: "Meu nome é Évellin",
    idade: "Eu tenho 18 anos",
}
exemplo = exemplo.bind(exem)
exemplo()

//declaração de função 
function decla () {
    console.log('Exemplo de declaração de função')
}
decla()

//expressão de função 
exp = function () {
     console.log('Exemplo de declaração de função')
}
exp()

//função recursiva
function fator (e) {
    if (e == 0 || e == 1) {
        return 1
    }else{
        return e * fator(e-1)
    }
}
console.log('fator: ', fator(15))

//função construtora 
function constr () {
    let nome = 'Évellin Cristina'
    this.getnome = function () {
        return nome = nome + ' dos Santos'
    }
}
const caracte = new constr ()
console.log(caracte.getnome())
