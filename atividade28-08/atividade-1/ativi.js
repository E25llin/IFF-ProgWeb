function celular (marca, modelo, ram, armazenamento, preco) {
         this.getPreco = function () {
            return preco 
        }
        this.getValores = function () {
            return{
                marca, modelo, ram, armazenamento 
            } 
        }
}
const celu = new celular ('xiaomi', 'redmi note 8', '4Gb', '128GB', 1200)
console.log (celu.getPreco)
console.log (celu.getValores)
const celu2 = new celular ('samsung', 'galaxy S23', '4Gb', '64GB', 1000)
console.log (celu2.getPreco)
console.log (celu2.getValores)