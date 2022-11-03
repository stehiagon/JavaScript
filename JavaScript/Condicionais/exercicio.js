//Crie um programa que lê um valor e imprima dizendo se ele é maior ou menor que 10.
var valor = prompt("Digite um valor:")

if (valor >= 10){
    console.log("Esse valor é maior que 10")
}else{
    console.log("Esse valor é menor que 10")
}

//OPERADORES LÓGICOS

/*
    == -> igualdade
    >  -> maior que
    <  -> menor que
    != -> diferente
    >= -> maior ou igual
    <= -> menor ou igual
*/

var a = 1,
    b = 5,
    c = 2,
    d = 1;

console.log(a>b) //false
console.log(a<b) //true
console.log(a == d) //true
console.log(b >= a) //true
console.log(c <= b) //true
console.log(d != a) //false
console.log(d != b) //true

/*
a = 4
b = 10
c = 5
d = 1
f = 5
*/ 