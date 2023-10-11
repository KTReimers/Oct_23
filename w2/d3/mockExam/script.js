
var element = document.querySelector('.popUp')
function popUp(){
    // var popUp = document.querySelector('.popUp')
    element.style.display = "block"
}


setTimeout(popUp,5000)

function removePopUp(){
    element.style.display = "none"
}

function searchBar(event){
    event.preventDefault()
    var searchInput = document.querySelector('input')
    alert(`You searched for ${searchInput.value}`)
}

function addToCart(){
    var cart = document.querySelector('span')
    cart.innerText++
}