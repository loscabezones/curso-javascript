/**
 * EJEMPLO 1
 */
/* console.log(b);
var b = 3; */

/**
 * EJEMPLO 2 function scope
 */
/* var a = 3;
 
function foo(){
    var a = 5;
    console.log(a);
}
foo();
console.log(a)
foo(); */


/**
 * Ejemplo 3 function call stack
 */

/* function foo(){
    console.log("happy");
}

function bar(){
    console.log("ini bar");
    foo();
    console.log("end bar");
}

function qux(){
    console.log("ini qux");
    bar();
    console.log("end qux");
}

qux(); */


/**
 * EJEMPLO 3-2 function call stack
 */

/*  var cont = 0;
 function foo(){
     bar();
 }

 function bar(){
     foo();
 }

 foo(); */

 
/**
 * Ejemplo 3-3 function call stack
 */
/* 
function foo(){
    throw new Error('sad');
}

function bar(){
    foo();
}

function qux(){
    bar();
}

qux(); */

/**
 * EJEMPLO 4 recursividad
 *///5! = 5 * 4 *3 *2 *1
/* 
 function factorial(num){
     var result = 1;
     for(var i = 0; i<num; i++){
         result = result * (i+1); 
     }
     return  result;
 }

 console.log(factorial(5)); */

/**
 * EJEMPLO 4-2 recursividad
 *///factorial recursivo

/*  function fact (n) {
     if (n>1){
         return n * fact(n-1)
     }
     return 1; 
 }

 console.log(fact(5)); */

 /**
  * EJEMPLO 5 
  *///functions arguments
/* hacer una funcion sum  que acepte un numero no limitado de numeros y devuelva la suma de ellos */


/* 
function sum (){
    result = 0;
        for(i=0; i<arguments.length; i++){
            result = result + arguments[i];
        }
        return result;
}

console.log(sum(5,5,5,5)); */

/**
 * EJEMPLO 6
 * Funtions call
 */

 

