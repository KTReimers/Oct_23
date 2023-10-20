// 1) Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Step 1 - define a function
// Step 2 - Has 2 parameters
// Step 3 -- define the sum
// step 3.5 - Check if a and b are equal 
// Step 4 - Check which is the greater number = 2 if statements
// Step 5 - Counting the in-betweens 
// Step 6 - add each number to sum
// Step 7 - Return sum

function addSum(a,b)  {
    let sum = 0
    if(a == b) {
        return a
    }
    if(a>b) {
        for(var i = b; i <= a; i++) {
            sum += i
        }
    }else{
        for(var i = a; i <=b; i++){
            sum += i
        }
    }
    return sum
}

console.log(addSum(6,28))






// 2)
// You will be given an array and a value. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.







// 3)
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// arr = [1, 2, 3, 4]
// => 1 * 2 * 3 * 4 = 24







// 4)
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]







// 5) Build a function that returns an array of any given array in reverse. return another array in reverse order







// 5.5) build a function that reverses an array without creating a new array
