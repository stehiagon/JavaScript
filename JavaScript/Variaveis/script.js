console.log("Stephanie")

//VARIÁVEIS
//Responsáveis por guardar dados na memória. Inicia com a palavra var, let ou const.

var nome = "Stephanie"
console.log(nome)

let idade = 21;
console.log(idade)

let idade2 = "21"
console.log(idade2)

const estudo = true;
console.log(estudo)

//Variável com vírgula

var nome2 = "Hiagon",
    idade3 = 21,
    estuda = true;

//Variável sem valor = Indefinida

var precoDoCarro;
console.log(precoDoCarro)

//REGRAS DOS NOMES DAS VARIÁVEIS
/* 
Os nomes das variáveis podem iniciar com $, _, ou letras. Podem conter números, mas não iniciar com eles. 

O JS é case sensitive:
nome é diferente de NOME, Nome, noMe...

Não utilizar palavras reservadas.

Camel Case:
É comum nomearmos assim: abrirCaixa (não dar espaço)
*/

    //EXEMPLOS DE NOMES DE VARIÁVEIS

    //Inválido
    /*
    var #nome;
    var function;
    var 1pessoa; //(não pode iniciar uma var com número)
    */

    //Válido
    var $elecionar;
    var _nome;
    var pessoa1passou;

//DECLARAR

/*console.log(Data)*/
//is not defined

    //MUDAR O VALOR ATRIBUÍDO
    /* É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém, não é possível modificar valores das declaradas com const. */

    var idade4 = 17;
    idade4 = 29
    console.log(idade4)

    let preco = 50
    preco = 25
    console.log(preco)

    /*const possuiFaculdade = true
    possuiFaculdade = false
    console.log(possuiFaculdade)*/

//EXERCÍCIOS
//Declarar uma variável com o seu nome
var nome5 = "Stephanie"
console.log(nome5)

//Declarar uma variável com a sua idade
var _idade = 21
console.log(_idade)

//Declarar uma variável com a sua comida favorita e não atribuir valor
var comida;
console.log(comida)

//Atribuir valor a sua comida
var comida2 = "Strogonoff"
console.log(comida2)

//Declarar 5 variáveis diferentes sem valores
var filme,
    série,
    livro,
    animal,
    música;

console.log(filme)
console.log(série)
console.log(livro)
console.log(animal)
console.log(música)

//REVISÃO
console.log("Erick")
console.log(2*10)
console.log(2-10)
console.log(2+10)
console.log(10/3)
console.log(10%3) //Módulo é o resto da divisão

//REVISÃO COM CALCULOS
var valor1 = 7
var valor2 = 2
var resultado = valor1 + valor2
console.log(resultado)
