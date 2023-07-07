// some method


const transactions=[-1000,-3000,-4000,2000,-898,-3800,-4500];

let result=transactions.some(function(n){
    return n>0;
})

console.log(result)







const transactions1=[-1000,-3000,-4000,-12000,-898,-3800,-4500];

let result1=transactions1.some(function(n){
    return n>0;
})

console.log(result1)

//every


let result2=transactions1.every(function(n){
    return n<0;
})

console.log(result2)