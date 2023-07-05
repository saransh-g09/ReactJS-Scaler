var a=10;

var a=35;
// Solution of redeclartion problem
let b=20;
b=99; // reassigning is allowed

//let b=45; // gives an error

console.log(a);
console.log(b);


if(true){
    let c=40;
    console.log(c);

}

// console.log(c);


//const


const d=100;

//const d=999;//not allowed


//d=10;// not allowed to reassign

console.log(d);