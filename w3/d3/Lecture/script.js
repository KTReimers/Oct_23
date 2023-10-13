// console.log("hello world")

// var - depreciated
// let - changeable or mutable
// const - immutable cannot be changed

// Arrays

// console.log(arr[2])
// console.log(arr[5][2])

function fizzBuzz(){
    for(let i = 1; i<=100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz")
        }else if(i % 3 == 0){
            console.log("Fizz")
        }else if(i % 5 == 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}

// fizzBuzz()

// let arr = [1,2,3,4,5]
// for(let i = 0; i < arr.length ; i++){
//     console.log(arr[i])
// }



// Objects- key value pairs

person={
    'firstName': 'Kyle',
    'lastName': "instructor",
    'age':46
}

// console.log(person['firstName'])
// console.log(person.lastName)

for(let key in person){
    console.log(person[key])
}
var people = [
    {name: "Bob",
    height: 5.8,
    gender: "male",
    money: 100,
    age:24,
    },
    {name: "Stacy",
    height: 5,
    gender: "female",
    money: 10,
    age:30,
    },
    {name: "Jessica",
    height: 4.6,
    gender: "female",
    money: 90,
    age:52,
    },
    {name: "Billy",
    height: 6.1,
    gender: "male",
    money: 120,
    age:43,
    },
    {name: "Davey",
    height: 5.9,
    gender: "male",
    money: 50,
    age:19,
    },
    {name: "Heather",
    height: 5,
    gender: "female",
    money: 10,
    age:46,
    },
    {name: "Jennie",
    height: 5.1,
    gender: "female",
    money: 40,
    age:18,
    },
    {name: "Sara",
    height: 5.2,
    gender: "female",
    money: 80,
    age:35,
    },
    {name: "David",
    height: 5.6,
    gender: "male",
    money: 35,
    age:28,
    },
]
