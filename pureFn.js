

var a=2
// this fn depends upon  var a so which makes it an impure function
function add(x){
    console.log(x+a)
    a++
}


add(2) 


add(2)


add(2)
//these fn call has the same agrument passed but we still getting different outputs ..this is called an impure fn()


//Pure Function


function addPure(x , a){
    console.log(x + a) // this console.log() is an external method call which makes this fuction impure
}

addPure(2 , 3)
addPure(2 , 3)
addPure(2 , 3)
addPure(2 , 3)



// changes to make this function pure

function addpure(x , y){
    return x+y
}

console.log(addpure(9, 7))


