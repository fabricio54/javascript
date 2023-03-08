const inputTarefas = document.querySelector('.input-tarefa');
const button = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// criando uma função que cria um elemento li
function criaLi () {
    const li = document.createElement('li');
    return li;
}

// função que cria tarefa
function criaTarefa() {
    if(inputTarefas.value) {
    const li = criaLi();
    li.innerText = inputTarefas.value;
    li = criaBotaoApagar(li);
    tarefas.appendChild(li);
    }
}

function criaBotaoApagar(li) {
    const botaoApagar = document.createElement('button');
    li.appendChild(botaoApagar);
    return li;
}

// função que apaga input
function apagarTextoInput () {
    inputTarefas.value = '';
} 

// função que captura o click no button adicionar nova tarefa
button.addEventListener('click', function() {
    criaTarefa();
    apagarTextoInput();
});

// função que captura o click de qualquer tecla do teclado
inputTarefas.addEventListener('keypress', function (event) {
    // captura aonde foi clicado
    if(event.keyCode === 13) {
        criaTarefa();
        apagarTextoInput();
    }
})
