// you have to check for even numbers in an array and put them in a separate arrays


let numbers = [1 ,2 , 20 , 35 ,12, 17, 46]

console.log(numbers)

let evenArr = []

for(let i=0; i< numbers.length ; i++){
    if(numbers[i] % 2== 0){
        evenArr.push(numbers[i])
    }
}

console.log(evenArr)
// back ticks!
console.log(`this id the first ev


en  number of the  array: 



${evenArr[0]}`)


//FILTER

let num=[1,2,20,35,12,17,46]

let evenNum=num.filter(function(n){
    return n%2==0
})

console.log(evenNum)