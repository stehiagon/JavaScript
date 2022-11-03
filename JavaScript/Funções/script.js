//Funções 
/*
    Function NomeDaFuncao (parâmetros){
        ações
    }
*/

var a = 7
var b = 8
var total = a + b
console.log(total)

function soma(c,d){
    var total = c + d 
    return console.log(total)
}

soma(10,50)
soma(7,5)

//Calculo da área de um quadrado
function AreaDeUmQuadrado(lado){
    var area = lado*lado
    return console.log(area)
}

AreaDeUmQuadrado(4)

//Faça uma função que calcule a área de um retângulo de lados diferentes.
function AreaDeUmRetangulo(a,b){
    var area = a*b
    return console.log(area)
}

AreaDeUmRetangulo(5,5)

//Função
function pi(){
    return 3.1415
}

function CorFavorita(cor){
    if(cor === "azul"){
        return "Gosta do céu"
    }else if(cor === "verde"){
        return "É palmeirense"
    }else{
        return "Você gosta de nada"
    }
}
