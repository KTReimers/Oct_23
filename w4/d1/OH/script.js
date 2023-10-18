var log = document.querySelector(".entries")

function addEntry(event){
    event.preventDefault()
    var entry = document.querySelector("textarea")
    console.log(entry.value)
    log.innerHTML += `<p>${entry.value}</p>`
}



function hide(element){
    element.innerText = "My Work To-Do List"
    log.remove()



}