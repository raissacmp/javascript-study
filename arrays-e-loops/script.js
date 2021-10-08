const videoGames = ['Switch', "Ps4", "Xbox"];

const ultimoItem = videoGames.pop() //Remove o último item e retorna ele
console.log("🚀 ~ file: script.js ~ line 4 ~ ultimoItem", ultimoItem)

const addItem = videoGames.push('3DS'); // Adiciona ao final da array
console.log("🚀 ~ file: script.js ~ line 7 ~ addItem", addItem)

for (let numero = 0; numero < 10; numero++) {
console.log("🚀 ~ file: script.js ~ line 10 ~ numero", numero)
}

var i = 0;
while (i < 10) {
 console.log("🚀 ~ file: script.js ~ line 15 ~ i", i++);
}


// for (let item = 0; item < videoGames.length; item ++){ //valor total pois as vezes não sabemos a quantidade de itens em um array
// videoGames[item]
// console.log("🚀 ~ file: script.js ~ line 25 ~ videoGames[item]", videoGames[item]) //mesma coisa q o for each abaixo
    
// }

// const videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
// for (var i = 0; i < videoGames.length; i++) {
//  console.log(videoGames[i]);
//  if(videoGames[i] === 'PS4') {
//  break;
//  }
// }

const frutas = ['banana', "uva", "amora", "abacaxi"];

frutas.forEach((item, index) => { //item e a posição, pode ser qualuqer nome, porém exitem melhores praticas.
    console.log(item, index)
})

