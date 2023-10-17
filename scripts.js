// Prática 1 //
console.log("==== Prática 1 ====")

const boleano = false
const nula = null

var numero = 1
let string= "5"

console.log("Váriaveis: " + boleano, nula, numero, string)

// Prática 2 //
console.log("==== Prática 2 ====")
console.log("Precisa descomentar...")

// let primeiroNumero = 10
// let segundoNumero = 5
// let result = primeiroNumero*segundoNumero //Multiplica as variaveis e armazena o resultado em uma nova

// console.log("Resultado de " + primeiroNumero + " vezes " + segundoNumero + " é igual a: "  + result)

// Prática 3 //
console.log("==== Prática 3 ====")
console.log("Precisa descomentar...")

// console.log(string == segundoNumero) //Verifica apenas o valor
// console.log(string === segundoNumero) //Verifica valor e tipo

// Prática 4 //
console.log("==== Prática 4 ====")
console.log("Precisa descomentar...")

const numeroPratica4 = 3
const stringPratica4 = "4"

let numeroPratica4ToString = toString(numeroPratica4) //Converte para string
let stringPratica4ToNumber = Number(stringPratica4) //Converte para number

// console.log(typeof(numeroPratica4ToString)) //Exibe o tipo da variável
// console.log(typeof(stringPratica4ToNumber)) //Exibe o tipo da variável

// Prática 5 //
console.log("==== Prática 5 ====")
console.log("Precisa descomentar...")
let numeroPratica5 = 4
// if(numeroPratica5 % 2 == 0){
//     alert(numeroPratica5 + " é par!")
// } else {
//     alert(numeroPratica5 + " é impar!")
// }

// Prática 6 //
console.log("==== Prática 6 ====")
console.log("Precisa descomentar...")
let numeroPratica6 = 15
    // for(let i = 0; i <= numeroPratica6; i++){
    //     console.log("Contagem: " + i)

    //     // if(i == numeroPratica6){ alert("A contagem acabou...") }
    // } // Pode se fazer uma verificação a cada repetição OU
    
    // alert("A contagem acabou...") //Simplesmente adicionar a chamada do alert APÓS a saida do loop.

// Prática 7 //
console.log("==== Prática 7 ====")
console.log("Precisa descomentar...")
function pratica7(x){
    let resultado = 1

    for(let i = 1; i <= x; i++){
        resultado = resultado * i
    }

    return("Fatorial de " + x + " é " + resultado)
}

// console.log(pratica7(5))

// Prática 8 //
console.log("==== Prática 8 ====")
console.log("Precisa descomentar...")

let objetoPratica8 = {nome: "Ruan", idade: 24}
let arrayPratica8 = ["item1", "item2", "item3"]

// console.log(objetoPratica8.nome)
// console.log(arrayPratica8[1]) //Em um array, comece a contar do zero

// Prática 9 //
console.log("==== Prática 9 ====")
console.log("Precisa descomentar...")

// console.log("Tamanho do array é: " + arrayPratica8.length)

//Adicionando mais um item
arrayPratica8.push("item4")
// console.log("Tamanho atualizado do array é: " + arrayPratica8.length)

//Buscando por um item no array
let itemBuscadoPratica9 = "item2"
// console.log(itemBuscadoPratica9 + " se encontra na posição '" + arrayPratica8.indexOf(itemBuscadoPratica9) + "' do array")

// Prática 10 //
console.log("==== Prática 10 ====")
console.log("Precisa descomentar...")

let dados

async function pratica10(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            //Aqui é oque acontece assim que a informação chega
            dados = response
            console.log("Dados vindos de dentro da função: " + dados)
        })
        .catch(error => {
            //Aqui você pode executar qualquer tipo de instrução, elas só acontecerão, se um erro acontecer ...
            console.error(error)
        }); // Trata erros, caso ocorreram
}

// pratica10(1)

// console.log("Dados logo após a chamada da função de requisição: " + dados) 
//     // Aqui você pode ver o comportamento de uma função assincrona...
//     // Mesmo chamando o console logo após a chamada da função, ela ainda demora um tempo para terminar sua execução e ainda não definiu dados...
//     // Como a função assincrona funciona de forma "paralela" as demais deve-se ter cuidado ao usa-las para garantir o seu correto funcionamento.


//Método alternativo 
async function pratica10Alternative(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); //Faz a requisição
        const data = await response.json(); //Armazena os dados na váriavel "data", 
                                            //observe o await, ele foi posto ali para esperar que o processamento esteja concluido e então grava a informação na váriavel
        dados = data;
        console.log(dados);
        return dados; // Retorne os dados se você quiser usá-los em outro lugar
                      //Para isso declare a variavel FORA da função.
    } catch (error) {
        //Aqui você pode executar qualquer tipo de instrução, elas só acontecerão, se um erro acontecer ...
        console.error(error);
    }
}

// pratica10Alternative(1).then(dados => {
//     // Você pode acessar os dados aqui
//     console.log(dados.name);
// });  //Quando a função terminar a sua execução, executa o bloco de instrução dentro do ".then"

// Prática 11 //
console.log("==== Prática 11 (script.js) ====")
console.log("Precisa descomentar...")

// const primeiroH1 = document.querySelector("h1");
// primeiroH1.textContent = "Novo texto";

// document.addEventListener("DOMContentLoaded", function () {
//     const primeiroH1 = document.querySelector("h1");
//     primeiroH1.textContent = "Novo texto";
// });