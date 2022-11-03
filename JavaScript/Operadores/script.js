//NÚMEROS
var idade = 26;
var idade1 = "26";
var pi = 3.14; //No lugar da vírgula usa-se um ponto.
var numero = 30000;
var joao = 3e10;
console.log(joao)

//OPERADORES ARITMÉTICOS
var soma = 100 + 50 //150
var subtração = 100 - 50 //50
var multiplicação = 100 * 2 //200
var divisão = 100 / 2 //50 
var expoente = 2**4 //16
var RestoDaDivisao = 14 % 5 //4

    //EXERCÍCIOS
    //Converta as seguintes expressões matemáticas para que possam ser calculadas usando o JavaScript

    //10+20+30
    var calculo = 10 + 20 + 30;
    console.log(calculo);

    //4 elevado a 2 e dividido a 30
    var calculo2 = 4**2 / 30;
    console.log(calculo2);

    //(9 elevado a 4 mais 2) vezes 6 menos 1
    var calculo3 = (9**4 + 2) * 6 - 1;
    console.log(calculo3);

//OPERADORES ARITMÉTICOS (STRINGS)
var Soma = "100" + 50;
console.log(Soma);

var Subtracao = "100" - 50; //O sinal vai retirar a string 
console.log(Subtracao);

var Multiplicacao = "100" * "2";
console.log(Multiplicacao);

var nome;
var Divisao = nome / 2;
console.log(Divisao); //NaN (Not a Number)

//A ORDEM IMPORTA
//Começa por radiciação e expoente, multiplicação e divisão, depois soma e subtração.

var total01 = 20 + 5 * 2;
console.log(total01);

var total02 = (20 + 5) * 2;
console.log(total02);

var total03 = 20 / 2 * 5;
console.log(total03);

var total04 = 10 + 10 * 2 + 20 / 2;
console.log(total04);

//OPERADORES ARITMÉTICOS UNÁRIOS
var icremento = 5;
console.log(++icremento); //O "++" soma mais um.