const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// criando um elemento li de listas
function criaLi() {
    const li = document.createElement('li');
    return li;
}

// criando uma função que detecta o evento de click do teclado
inputTarefa.addEventListener('keypress', function(e) {
    // codigo da tecla ENTER
    if(e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
}

// limpa o inputTarefa: deixa a string vazia
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

// cria botão de apagar tarefa
function criaBotaoApagar(li) {
    // dando um espaço no li
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar'); adicionando uma classe com classList
    // adicionando com setAtributo onde ele seta o atributo do elemento no caso queremos setar o atributo class 
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

// criando uma função que escuta que elemento está sendo clicado
document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        // para remover o pai do elemento que contem a classe apagar
        el.parentElement.remove();
        salvarTarefa();
    }
})

// criando uma função que pega todos os li apartir da class
function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        // substituindo a palavra apagar por nada
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    // convertendo um elemento no javascript numa string no formato JSON
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    console.log(tarefasJSON);

    // local no navegador onde podemos salvar uma mini-base de dados
    // muito importante para utilizarmos o método da instancia do navegador precisamos estar passando uma string e um nome que ira identificar
    localStorage.setItem('tarefas', tarefasJSON);
}

// adicinando as tarefas ao li novamente e convertendo no array 
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');

    // fazendo o inverso: pegando uma string no formato JSON e transformando e um objeto javascript
    const listaDeTarefas = JSON.parse(tarefas);
    
    // criando um for para adicionar de novo a tarefa
    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();
