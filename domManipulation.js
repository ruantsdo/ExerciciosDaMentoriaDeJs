// Prática 11 //
console.log("==== Prática 11 (DOM.js) ====")
console.log("Precisa desconmentar...")

const primeiroH2 = document.querySelector("h2");
// primeiroH2.textContent = "Novo texto";

// Para alterar TODOS os h2 (ou outro elemento qualquer) devemos percorrer a lista criada pela função.
// Para fazer isso podemos:

const todosH2DoDocumento = document.querySelectorAll("h2");
//     todosH2DoDocumento.forEach(function (element) {
//         element.textContent = "Novo texto" ;
// }); //Esse método criará um array com todos os h2 presentes no seu html.

//Podemos também adicionar textos diferentes para cada membro da lista
//Por exemplo:
    
// todosH2DoDocumento.forEach(function (element, index) {
//     element.textContent = `Novo texto ${(index)}`;
// });


