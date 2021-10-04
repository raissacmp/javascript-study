const pessoa = {
    nome: "Raissa",
    idade: 23
}

console.log(pessoa.nome)

const quadrado = {
    lados: 4, //this
    area: function (lado){
        return lado*lado;
    },
    perimetro: function (lado){
        console.log(this.lados) // retorna os proprios valores dentro do objeto (quadrado)
        return this.lados * lado;
    }
}
console.log("🚀 ~ file: script.js ~ line 14 ~ quadrado", quadrado)
console.log("🚀 ~ file: script.js ~ line 14 ~ area", quadrado.area(5))
console.log("🚀 ~ file: script.js ~ line 14 ~ perimetro", quadrado.perimetro(2))