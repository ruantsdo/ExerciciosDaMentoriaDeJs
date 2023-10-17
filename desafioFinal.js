console.log("===== DESAFIO FINAL =====")

/* CAPTURA DOS ELEMENTOS HTML */
const consultaForm = document.querySelector("#consultaForm")
const consultaButton = document.querySelector("#consultaButton")
const userName = document.querySelector("#userName")
const userEmail = document.querySelector("#userEmail")
const userStreet = document.querySelector("#userStreet")
const errorField = document.querySelector("#error")
const userId = document.querySelector("#userId")

    async function requisitarDados() {
        
    if(document.querySelector("#userId").value !== ""){ //Checa se há algo no input, e se houver executa o bloco de código abaixo...
        const id = parseInt(userId.value) // Captura o valor digita no input...

        if (id >= 1 && id <= 10) { //Valida se o valor está entre 1 e 10
            errorField.style.color = "black" //Define a cor do texto da menssagem
            errorField.textContent = "Carregando..." //Define a nova menssagem a ser exibida...

            try { //Faz a requisição e trata os dados
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`) //Requisição feita aqui
                const data = await response.json() //Tratando os dados
                userName.textContent = data.name //Mostrando os dados desejados (após tratar)
                userEmail.textContent = data.email
                userStreet.textContent = data.address.street

                errorField.textContent = "" //Limpa o texto com o status "carregando", 
                                            //que é exibido enquanto a requisição e o tratamento ainda 
                                            //não termninaram de ser executados
                errorField.style.color = "red"//Define para a cor vermelha padrão
                
                console.log(data) //Exibe a resposta recebida no console
            } catch (error) {
                console.error(error) // Exibe erros no console, caso ocorram...
            }
        } else {
            // Instruções para caso o valor do campo esteja fora de 1 e 10 (segunda verificação)
            errorField.textContent = "Por favor, insira um número entre 1 e 10." 
        }
    } else {
        // Instruções para caso o compo esteja vazio (primeira verificação)
        errorField.textContent = "O campo é obrigatório!"
    }
}