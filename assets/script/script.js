// Pegar elementos html
let inputTxt = document.getElementById('txt-1');
let btnSend = document.getElementById('btn-send');
let itemLista = document.getElementById('item1');

btnSend.addEventListener('click', function (e) {

    e.preventDefault(); // Impede o envio do formulário padrão

    let value = inputTxt.value; // Captura o valor do campo de entrada de texto

    itemLista.innerHTML = value; // coloca o valor do input na <li> 

    //até aqui está ok 

    //póximo, limpar caixa do input para inserir novo valor, e pensar numa forma de adicionar li a acada input novo 

    for (i=0; i > itemLista; i++){
        document.createElement('li')
    }

});
