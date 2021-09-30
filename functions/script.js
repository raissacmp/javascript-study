function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(2))

function pi() {
    return 3.14;
   }
   var total = 5 * pi(); // 15.7
   console.log("🚀 ~ file: script.js ~ line 10 ~ total", total)

   function imc(peso, altura){
       const imc = peso / (altura * altura);
       return imc; 
   }

   console.log(imc (80, 1.8))

   function corFavorita(cor) {
    if(cor === 'azul') {
    return 'Você gosta do céu';
    } else if(cor === 'verde') {
    return 'Você gosta de mato';
    } else {
    return 'Você não gosta de nada';
    }
   }
   corFavorita(); // retorna 'Você não gosta de nada
   console.log("🚀 ~ file: script.js ~ line 29 ~ corFavorita()", corFavorita('azul'))

   addEventListener('click', function() {
    console.log('Clicou');
   });

   function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
   }
   imc2(20, 1.80); // retorna o imc
   console.log(imc2(80, 1.80)); // retorna o imc e undefined

   function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
    } else if(idade >= 60) {
    return true;
    } else {
    return false;
    }
   }

   console.log(terceiraIdade(60))

function faltaVisitar(paisesVisitados){
    const totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesVisitados} paises.`
}

var profissao = 'Designer';
function dados() {
 var nome = 'André';
 var idade = 28;
 function outrosDados() {
 var endereco = 'Rio de Janeiro';
 var idade = 29;
 return `${nome}, ${idade}, ${endereco}, ${profissao}`;
 }
 return outrosDados();
}
dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
console.log("🚀 ~ file: script.js ~ line 72 ~ dados()", dados())

// Exercicios

// Crie uma função para verificar se um valor é Truthy

function valueIstrue(value) {
   return !!value
}
console.log("🚀 ~ file: script.js ~ line 86 ~ valueIstrue()", valueIstrue(0))


// Crie uma função matemática que retorne o perímetro de um quadrado lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado){
    return lado * 4
    }
    perimetro(5)
    console.log("🚀 ~ file: script.js ~ line 86 ~ perimetro(5)", perimetro(5))
    


// Crie uma função que retorne o seu nome completo ela deve possuir os parâmetros: nome e sobrenome

function fullName(nome, sobrenome){
    return nome + " " + sobrenome;
}
console.log("🚀 ~ file: script.js ~ line 104 ~ fullName(Raissa,Campos)", fullName("Raissa", "Campos"))

// Crie uma função que verifica se um número é par

function isEven (value) {
    const valueRest = value / 2
    if (Number.isInteger(valueRest)) {
        return 'é par'
    } else {
        return 'não é par'
    }
}
 console.log("🚀 ~ file: script.js ~ line 115 ~ isPar()", isEven(80))

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

function isType(value){
    return typeof value
}
console.log("🚀 ~ file: script.js ~ line 120 ~ isType ~ isType(value)", isType(""))


// addEventListener é uma função nativa do JavaScript o primeiro parâmetro é o evento que ocorre e o segundo o Callback,  utilize essa função para mostrar no console o seu nome completo quando o evento de "scroll" ocorrer


addEventListener('scroll', () => {
    console.log('Raissa Campos');
   });

//Corrija o erro abaixo:

    var totalPaises = 193;

    function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para serem visitados`
    }
    function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises}`
    }    

   console.log("🚀 ~ file: script.js ~ line 137 ~ precisoVisitar(20);", precisoVisitar(60))