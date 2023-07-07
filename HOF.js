
let arr=[ 1, 2, 3, 4, 5]
console.log(arr)

let squaredArr=[]

for(let i=0;i<arr.length ; i++){
    squaredArr.push(arr[i]*arr[i])
}

console.log(squaredArr)


//map

//Map will loop through every element of your array and will perform specific operations that you have provided

//map array will always return you a new array with your result

const num=[ 1, 2, 3, 4, 5]
console.log(num)

const squaredNum = num.map(function(n){
    return n*n
})

console.log(squaredNum)

const transactions = [1000, 3000 ,2000 ,-898 ,3800 , -4500];

const inrtoDollar = 80;

const convertedTran = transactions.map((amount)=>{ // map with arrow functions
    return (amount/inrtoDollar).toFixed(0) // toFixed to not show the decimal values
})

console.log(convertedTran)

//FOREACH

const convertedTran1 = transactions.forEach((amount)=>{ 
    console.log((amount/inrtoDollar).toFixed(0))
})
console.log(convertedTran1)