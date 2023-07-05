let arr=['hi', 'I', ,'Am','Steve']

let q=arr[1];
let w=arr[2];

console.log(q);
console.log(w);


//destructuring array
let [a,b,c,d,e]=arr;

console.log(c);
console.log(e);

//Destructuring object
// this is an obj.
// let myObj={
//     name:'Adam',
//     age:40,
//     gender:'M'
// }


// let {name : n,age : A,gender : g}=myObj; //in de-structuring an obj we have use the same key names or we will get undefined output also we an give alternate names to keys by using ":"

// console.log(n)
// console.log(age)
// console.log(gender)



//Nested Objects De-structuring


let myObj1={
    name:'Adam',
    age:40,
    gender:'M',

    address:{
        country:"England",
        city:"London"
    }
}


let {name:Na,age:Ag,gender:Ge,address:{country:C},address:{city:Cc}}=myObj1;

console.log(Na)
console.log(Ag)
console.log(Ge)
console.log(C)
console.log(Cc)