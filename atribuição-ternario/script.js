var numero = 20;

numero += 10
console.log("🚀 ~ file: script.js ~ line 3 ~ numero", numero)

var numero2 = 10

numero2 /= 10
console.log("🚀 ~ file: script.js ~ line 8 ~ numero2", numero2)

const idade = 20
const podeBeber = (idade >= 18) ? "pode beber" : "não pode beber" // não faz sentido retornar booleanos em operações ternarios pq ele ja retorna por si.

console.log("🚀 ~ file: script.js ~ line 11 ~ podeBeber", podeBeber)

var possuiFaculdade = true;

if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou

if(possuiFaculdade)
 console.log('Possui faculdade');
else
 console.log('Não possui faculdade'); // mais organizada.

 //Exercício

// Some 500 ao valor de scroll abaixo atribuindo o novo valor a scroll
var scroll1 = 1000;
var adicional  = 500;
console.log("🚀 ~ file: script.js ~ line 34 ~ scroll1 += adicional", scroll1 += adicional)


// Atribua true para a variável darCredito caso o cliente possua carro e casa e false caso o contrário.

var possuiCarro = true;
var possuiCasa = true;
var darCredito

darCredito = (possuiCarro && possuiCasa) ? "liberado" : "recusado"
console.log("🚀 ~ file: script.js ~ line 42 ~ darCredito", darCredito)