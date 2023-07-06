// without callback funtion


// function printFirstName(firstname){
//     console.log(firstname)
// }

// printFirstName('Steve')

// function printLastName(lastName){
//     console.log(lastName)
// }

// printLastName('Rogers')



// callback function
function printFirstName(firstname , cb){
     console.log(firstname)
     cb('Rogers')
}
function printLastName(lastName){
     console.log(lastName)
}

printFirstName('Steve', printLastName) //this is a callbackfunction

// this funtion return true is number is even and fase if not even
const isEven =(n)=>{
    return n%2==0
}
// callback Fn
let printResultFn = (evenFn , num)=>{

    const isNumEven = evenFn(num)

    console.log(`The number ${num} is Even is ${isNumEven}`)
}


printResultFn(isEven ,11)
