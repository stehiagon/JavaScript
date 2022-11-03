//Crie uma função matemática que retorne o perímetro de um quadrado.
//Lembrando: perímetro é a soma dos quatro lados do quadrado.
function perimetro(lado1,lado2,lado3,lado4){
    var soma = lado1+lado2+lado3+lado4
    return console.log(soma)
}

perimetro(5,2,6,4)

//Crie uma função que retorne o seu nome completo.
//Ela deve possuir oa parâmetros: nome e sobrenome.
function NomeCompleto(nome,sobrenome){  
   var nome1 = nome + " " + sobrenome
   return console.log(nome1)
}

NomeCompleto("Stephanie","Hiagon")

//Crie uma função que verifica se um número é par.
function par(numero){
    if(numero % 2 == 0){
        console.log("Esse número é par")
    }else{
        console.log("Esse número é impar")
    }
}