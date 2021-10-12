function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
   }
   mostrarCarro(); 

   for(var i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
   }
   console.log(i); // 10

//Exercício

// Por qual motivo o código abaixo retorna com erros?

// {
//  var cor = 'preto';
//  const marca = 'Fiat';
//  let portas = 4;
// }
// console.log(var, marca, portas);

{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
   }

// deve-se retornar com o nome da variavel em si & tb estava fora do escopo do bloco.


// Como corrigir o erro abaixo?

// function somarDois(x) {
//  const dois = 2;
//  return x + dois;
// }
// function dividirDois(x) {
//  return x + dois;
// }
// somarDois(4);
// dividirDois(6);

const dois = 2;
function somarDois(x) {
    return x + dois;
   }
   function dividirDois(x) {
    return x / dois;
   }
   console.log("🚀 ~ file: script.js ~ line 53 ~ omarDois(4);", somarDois(4))
   console.log("🚀 ~ file: script.js ~ line 55 ~ dividirDois(6);", dividirDois(6))
//variavel não consegue ser acessada porque estava restrita dentro de um escopo e sendo chamada em outro.


// O que fazer pra retornar 500?

// var numero = 50;
// for(var numero = 0; numero < 10; numero++) {
//  console.log(numero);
// }
// const total = 10 * numero;
// console.log(total)

const numero = 50;
for(let numero = 0; numero < 10; numero++) { //um bloco a parte n da conflito
 console.log(numero);
}
const total = 10 * numero;
console.log(total)
//manteve no escopo ao mudar para let