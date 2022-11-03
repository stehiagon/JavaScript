//OBJETOS
//Conjunto de variáveis e funções que são chamadas de propriedades e métodos.

var pessoa = {
    nome: "Grazi",
    idade: 20,
    profissao: "Monitora do professor bonitão",
    faculdade: true,
}

pessoa.nome
console.table(pessoa)

//Objeto com funções ou métodos
var quadrado = {
    perimetro: function(lado){
        return lado + lado + lado + lado
    },
    area: function(lado){
        return lado*lado
    } 
}

//ARRAYS
//É um grupo de valores geralmente relacionados. Servem para guardamos diferentes valores em uma úica variável.

var videoGames = ["PS4", "XBox", "Switch"]

console.log(videoGames.length)

/* videoGames.push("wii") = o "push" adiciona mais um no nosso site
   videoGames.pop() = o "pop" retira o último item no nosso site
*/