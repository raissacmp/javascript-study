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

// const menu = {
//     width: 800,
//     height: 50,
//     backgroundColor: '#84E',
//    }
//    const bg = menu.backgroundColor; // '#84E' 

var height = 120;
var menu = {
 width: 800,
 height: 50,
 metadeHeight() {
 return this.height / 2;
 }
}
menu.metadeHeight(); // 25
// sem o this, seria 60

// Exercicios

//Crie um objeto com seus dados pessoais que deve possuir pelo menos duas propriedades (nome e sobrenome)

var dados = {
    nome: "Raissa",
    sobrenome: "Campos",
    idade: 23,
    sexo: "feminino"
}

//Crie um método no objeto anterior que mostre o seu nome completo
 
dados.nomeCompleto = function() { //não esquecer de chamar como função //console.log(dados.nomeCompleto())
    return `${this.nome} ${this.sobrenome}`
}

// MOdifique o valor da propriedade preco para 3000

var carro  = {
    preco: 1000,
    portas: 4,
    marca: "Audi"
}

carro.preco = 3000
console.log("🚀 ~ file: script.js ~ line 64 ~ carro.preco", carro.preco)



//Crie um objeto de um cachorro que represente um labrador preto, com 10 anos, que lata ao ver um homem.

const dog = {
    raca: "labrador",
    cor: "preto",
    idade: 10,
    latir(pessoa) {
        if(pessoa === "homem"){
            return "Latir"
        } else {
            return "Não late"
        }
    }
}