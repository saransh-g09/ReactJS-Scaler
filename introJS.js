 console.log("hello everyone");

// declaring a variable
 let a;
 console.log("hello",a);

 a=10;
 a=10.1;
 a='aslkadmamlk';
 a=true;
 console.log("hello",a);


// function
// component
function fn(){  // when start a function start in a upper case like FN
    console.log("hello i ran");
    // from here will only return HTML;
    return "In JSX i will only return HTML"
}

 let container=fn(); // in react functon call is replaced by <FN></FN>

console.log(container);

//Objects -> collection of keys: value pairs;


let cap ={
    name:"Steve",
    lastName:"Ranger",
    age:40,
    isAvenger:true,
    moveies:["firstAvenger","Wintersoilder","civil War"],
    sayHi: function(){
        console.log("Hi From cap");

    },
    address:{
        city:"kullu",
        state:"Himachal",

    }
}
    console.log("name",cap.name);
    console.log("lastname",cap.lastName);
    console.log("firstmovies",cap.moveies[0]);

    cap.sayHi();

    let arr=[];
    arr=[12,11,4,5];

    //higher order function 
    //import and export ES6;
    // functional programming 
    //from scaler module;


