// we will be given a number and we have to check that if the square of that number is even or not.



// Imperative way of writing code
const a=6

const aSq=a*a

let isEven;


if(aSq % 2 == 0){
    isEven = true
}
else{
    isEven = false
}

console.log(isEven)

// Declarative way of writing code

const checkForSq=(x)=>(x*x%2===0 ? true : false)

console.log(checkForSq(69))