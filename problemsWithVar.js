// first issue with var keyword

// var a=21;


var a=35; // redeclaration of variable




// console.log(a);


// 2nd issue with var keyword

if(a===35){
    var b=40;
    console.log(b);

}
console.log(b);  // here the var b is being accessed outside the block ,which shouldn't be allowed

//variable declared with var keyword aren't blocked scoped they are functon scoped

function test(){
    var c=100;
    console.log(c);
}

test();

console.log(c);  // this will give an error
