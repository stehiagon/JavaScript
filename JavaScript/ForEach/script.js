//Array 
//É um grupo de valores. Servem para guardamos diferentes valores em uma única variável.

/*var videoGames = ['Switch', 'PS4', 'XBox'];
console.log(videoGames[0]);
console.log(videoGames[1]);
console.log(videoGames[3]);

var numeros = [1,2,3];
console.log(numeros[0] + numeros[2]);
*/

/*var i = 0;
while(i<10){
    console.log(i)
    i = i + 1
}*/

/*for (var i = 0; i < 10; i = i + 1){
    console.log(i)
}*/

var videoGames = ['Switch', 'PS4', 'XBox'];

//ForEach 
//ForEach é um método que executa uma função para cada item array. É uma forma mais simples de utilizar um loop com arrays.
videoGames.forEach(function(a, b, c){
    console.log(a, b, c)
})

//Crie uma array com os anos que o Brasil ganhou a copa 1958, 1962, 1970, 1994 e 2002.
var copa = [1958, 1962, 1970, 1994, 2002]

//Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem: "O Brasil ganhou a Copa de ${ano}"
copa.forEach(function(a){
    console.log(`O Brasil ganhou a Copa de ${a}`)
})