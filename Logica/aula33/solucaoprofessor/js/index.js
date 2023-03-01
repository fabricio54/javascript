const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

// selecionando o a classe onde iremos inserir as tags
const container = document.querySelector('.container');
// criando o elemento div
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    // desistruturando os objetos
    let { tag, texto } = elementos[i];
    // criando o elemento pela iteração
    let elemento = document.createElement(tag);
    // adicionando o texto ao elemento criado
    //elemento.innerHTML = texto;
    // utilizando o innertext que seleciona apenas o texto
    //elemento.innerText = texto;
    // ou ainda utilizando outra tecnica
    let textoCriado = document.createTextNode(texto);
    elemento.appendChild(textoCriado);
    // adicionando ao elemento div o sub elemento criado
    div.appendChild(elemento);
}

// adiciona tudo ao elemento container
container.appendChild(div);