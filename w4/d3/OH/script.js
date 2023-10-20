


async function chooseYou(event){
    event.preventDefault()
    let input = document.querySelector('#pokeName').value
    console.log(input)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    let data = await response.json()
    console.log(data)
    console.log(data.name)
    console.log(data.sprites.front_default)
    let poke = document.querySelector('.pokemon')
    poke.innerHTML = `<div class="card"><h2>Name: ${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="${data.name}" width=150></div>`
}

async function pickOne(banana){
    console.log(banana,"******************")
    let response = await fetch(banana)
    let data = await response.json()
    // console.log(data)
    // console.log(data.name)
    // console.log(data.sprites.front_default)
    let poke = document.querySelector('.pokemon')
    poke.innerHTML += `<div class="card"><h2>Name: ${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="${data.name}" width=150></div>`
}



async function getPokemon(event){
    event.preventDefault()
    let input = document.querySelector('#number').value
    // console.log(input)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${input}&offset=5`)
    let data = await response.json()
    console.log(data)
    let poke = document.querySelector('.pokemon')
    for(let i =0; i < data.results.length; i++){
        console.log(data.results[i].name)
        let url= data.results[i].url
        console.log(url, "*****************")
        pickOne(url)
    }

}


function addNum(element){
    let num = document.querySelector('span')
    // console.log(element)
    num.innerText = element.value
}