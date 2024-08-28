function Cake (nome, peso, preco) {
     let Des = 0.20
     this.getDes = function () {
        let pre = preco - Math.round((preco * 0.20))
        return pre
    }
    this.getNome = function () {
        return nome
    }
    this.getpreco = function () {
        return preco
    }
}
const bolo = new Cake ('laranja', '600g', 12)
console.log(`Valor com desconto: ${bolo.getDes()}`)
console.log(`Sabor: ${bolo.getNome()}`)
console.log(`Preço original(sem desconto): ${bolo.getpreco()}`)