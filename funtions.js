// a function is a reusable block of code

function Add(a, b, c, r){
    return a + b + c + r
}

Add()
console.log('-----------------Adding values---------')
console.log(Add(1000000, 20000000, 30000000, 20000000))

//fuctionadd3(left, right){
   // let sum = left + righ
    //return sum;
//}
//console.log(add3(3, 6, 6));
//console.log(add3(3))



// local and global variables

// local variable- has a limited scope(inside a function where it is defined)
// A global variable - has a global scope (it can be accessed in any function)

function multiply(){
    let localvariable = 5;
    let localvariable2 = 6;

    let product = localvariable * localvariable2

    return product
}
console.log('my roduct', multiply())

// Examples of global variables
let globalVariable1 = 5;
let globalVariable2 = 6;

function multiply(){

}
    
    