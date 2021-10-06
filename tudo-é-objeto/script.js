var nome = "Raissa"

var nomeMinusculo = nome.toLocaleLowerCase()

const btn = document.querySelector('.btn') //um seletor de css
console.log("🚀 ~ file: script.js ~ line 6 ~ btn", btn)

//Exercício

// nomeie 3 propriedades ou métodos de strings

const nomeEX = "raissa"

const nomeChart = nomeEX.charAt(0)
console.log("🚀 ~ file: script.js ~ line 14 ~ nomeChart", nomeChart) //return r

const nomeReplace = nomeEX.replace('raissa', 'campos')
console.log("🚀 ~ file: script.js ~ line 17 ~ nomeReplace", nomeReplace) // return campos

const nomeToUpperCase = nomeEX.toUpperCase()
console.log("🚀 ~ file: script.js ~ line 20 ~ nomeToUpperCase", nomeToUpperCase) // return RAISSA


// nomeie 4 propriedades ou métodos de elementos do DOM

btn.addEventListener("mouseover", (event) => { 
    event.target.style.color = "red"
})

btn.addEventListener("mouseout", (event) => { 
    event.target.style.color = "black"
})

btn.addEventListener("click", (event) => { 
    event.target.style.color = "blue"
})

btn.addEventListener("click", (event) => { 
    btn.classList.add('ativo')
})


// busque na web um objeto (método) capaz de interagir com o clip clipboard é a parte do seu computador que lida com o CTRL + C

// document.execCommand("copy")
// document.execCommand("cut")
// document.execCommand("paste")