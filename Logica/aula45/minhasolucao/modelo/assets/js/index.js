const inputTarefas = document.querySelector('.input-tarefa');
const button = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


// criando uma função que cria um elemento li
function criaLi () {
    const li = document.createElement('li');
    return li;
}

function criaBotaoApagar() {
    const botaoApagar = document.createElement('button');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.innerText = 'Apagar';
    return botaoApagar;
}

// função que cria tarefa
function criaTarefa() {
    if(inputTarefas.value) {
    const li = criaLi();
    li.innerText = inputTarefas.value + ' ';
    li.appendChild(criaBotaoApagar());
    tarefas.appendChild(li);
    salvarTarefa();
    }
}

// função que apaga input
function apagarTextoInput () {
    inputTarefas.value = '';
    inputTarefas.focus();
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
});


tarefas.addEventListener('click', function (event) {
    const el = event.target;

    if(el.classList.contains('apagar')) {
        // ira remover o 'pai' do elemento
        el.parentElement.remove();
        salvarTarefa();
    }
})

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];
    
    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaTarefas);
    console.log(tarefasJSON);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');

    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

