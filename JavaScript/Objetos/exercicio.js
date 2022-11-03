//Crie um objeto com os seus dados pessoais. Deve possuir pelo menos duas propriedades: nome e sobrenome.
var pessoa = {
    nome: "Stephanie",
    sobrenome: "Hiagon",
    idade: 21,
}

console.log(pessoa)

//Crie um objeto de um cachorro que represente um labrador, preto, com 10 anos, que late ao ver um homem.
var cachorro = {
    raça: "Labrador",
    cor: "Preto",
    idade: 10,
    morde: "Late ao ver um homem",
}

console.log(cachorro)

//Crie um objeto que tenha a funcionalidade de achar a média aritmética de três valores.
var media = {
    MediaAritmetica: function(n1,n2,n3){
        return (n1 + n2 + n3) / 3
    },
}