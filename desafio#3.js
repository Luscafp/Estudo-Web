/*
*********************************************
*               Desafio #3 do               *
*      curso de Web Moderno na Udemy        *    
*********************************************
*/ 

let a = 7
let b = 94
let c = a;
 
a = b
b = c

//Poderia ser feito desta forma:
//[a, b] = [b, a]

console.log(a)
console.log(b)