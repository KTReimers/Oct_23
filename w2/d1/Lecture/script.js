// primitive data types
// strings
let firstName = "Kyle"
let phrase = "this is Kyle's ice cream"
// boolean- true or false
let isClean = false
// numbers
let age = 28
// var, let, const

// data structures
// array []
let number = [1,2,3,4,5]

// console.log(number[1])

// object {}

let person={
    "firstName": "Kyle",
    "lastName": "Reimers",
    "age": 28
}
// console.log(person["lastName"])
// console.log(person['age'])
// console.log(person.age)

// operators
// == evaluates
// > <
// % modulus gets remainder
// +-/*
// + addition and concatenate (combine strings)
// string interpolation - `my name is ${firstName}` == my name is Kyle
// ++ increment by 1
// != not equal
// || or
// && and
//  === Strict comparison (value, data type)
// += -=
// age +=5 (33)
// age = age + 5


function sayName(){
    return "Kyle"
}
// let name = sayName()
// console.log(name)
// console.log(sayName())

function add(a,b){
    return a + b
}

console.log(add(10,15))