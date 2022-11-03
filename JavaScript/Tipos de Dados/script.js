//TIPOS DE DADOS

//Todos são primitivos, exceto os objetos.
var nome = "João" //String (quando utiliza aspas)
var idade = 16 //Number
var VerdadeiroOuFalso = true //Boolean
var time; //Undefined
var comida = null //Null (Objeto Nulo)
var NovoObjeto = {} //Object

//Objetos
    const Alunos = {
        NomeDoAluno: "Erick",
        IdadeDoAluno: 25,
        TimeDoAluno: false,
    }

    console.log(Alunos.NomeDoAluno)

//Verificar os tipos de dados
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof VerdadeiroOuFalso);
console.log(typeof time);
console.log(typeof comida);
console.log(typeof NovoObjeto);

//Você pode somar string e assim concatenar as palavras.
var nome2 = "Stephanie"
var sobrenome = "Hiagon"
var nomeCompleto = nome2 + " " + sobrenome
console.log(nomeCompleto);

//Você pode somar números com strings, o resultado final sempre será uma string.
var gols = 1000;
var frase = "Pelé fez" + " " + gols + " " + "gols"
console.log(frase);

//Template String
var golacos = 1000;
var frase2 = `Pelé fez mais de ${golacos} gols`
console.log(frase2);

//EXERCÍCIOS

//Declare uma variável contendo uma string
var cor = "Azul"
console.log(cor)

//Declare uma variável contendo um número dentro de uma string
var ano = "2022"
console.log(ano)

//Declare uma variável com a sua idade
var idade3 = 21
console.log(idade3)

//Declare duas variáveis, uma com o seu nome e outra com seu sobrenome e some as mesmas
var nome3 = "Stephanie"
var sobrenome2 = "Hiagon"
var nomeCompleto2 = nome3 + " " + sobrenome2
console.log(nomeCompleto2)

//Coloque a seguinte frase em um variável: It's time
var frase3 = "It's time"
console.log(frase3)

//Verifique o tipo de variável que contém seu nome
console.log(typeof nome3)


//var numero = prompt("Digite um valor:")
//console.log(numero)

//Faça um programa que peça dois números para o usuário. Imprima a soma desses dois números.

//Criar dois prompt dentro de variáveis
var x = parseInt (prompt("Digite o 1º valor:"))
var y = parseInt (prompt("Digite o 2º valor:"))

//Somar os resultados
var soma = x + y
console.log(soma)
