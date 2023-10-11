function changeText(element){
    console.log(element.innerText)
    if(element.innerText == "Sign in"){
        element.innerText = "Sign out"
    }else{
        element.innerText = "Sign in"
    }
}


function showImg(){
    var el = document.querySelector('#dwight')
    console.log(el)
    el.style.display = 'block'
}

function byeImg(){
    var el = document.querySelector('#dwight')
    el.style.display = "none"
}

function bgChange(event){
    event.preventDefault()
    // console.log("hello")
    var formInput = document.querySelector('#formInput')
    var navBar = document.querySelector('.navbar')
    navBar.style.backgroundColor = formInput.value
    console.log(formInput.value)
}

function like(id){
    var el = document.querySelector(`#${id}`)
    console.log(el)
    el.innerText++
}