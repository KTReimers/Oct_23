
async function chooseYou(){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    let data = await response.json()
    console.log(data)
    console.log(data.name)
    console.log(data.sprites.front_default)
    let poke = document.querySelector('.pokemon')
    poke.innerHTML = `<h2>Name: ${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="${data.name}" width=150>`
}