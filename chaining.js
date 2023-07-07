let people =[
    {name:"A",age:30,gender:"M"},
    {name:"B",age:13,gender:"M"},
    {name:"C",age:19,gender:"F"},
    {name:"D",age:20,gender:"F"},
    {name:"E",age:40,gender:"M"},
    {name:"F",age:45,gender:"F"},
    {name:"G",age:10,gender:"M"},
    {name:"H",age:56,gender:"F"},
    {name:"I",age:99,gender:"M"}
]
// age of all the men

//filter

// 
let agesOfMales= people.filter(function(obj){
    return obj.gender=='M'
}).map(function(m){
    return m.age
})

console.log(agesOfMales)