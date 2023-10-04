// Pegar elementos html
let inputTxt = document.getElementById('txt-1');
let btnSend = document.getElementById('btn-send');
let itemLista = document.getElementById('item1');

btnSend.addEventListener('click', function (e) {

    e.preventDefault(); // Impede o envio do formulário padrão

    let value = inputTxt.value; // Captura o valor do campo de entrada de texto


    //até aqui está ok 

    //póximo, limpar caixa do input para inserir novo valor, e pensar numa forma de adicionar li a acada input novo 

    // reatribui o valor do campo de texto a uma string vazia

    inputTxt.value = ""

    //adiciona nova li 

    //chamar a ol 
    let lista = document.getElementById("lista1");
    //criar elemento 
    let novoItem = document.createElement("li");
    //pegar valor do txt input 
    novoItem.textContent = value;

    lista.appendChild(novoItem);



});
