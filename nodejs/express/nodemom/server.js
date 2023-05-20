// importando o express para o projeto
const express = require('express');
// executando o express
const app = express();

//                   CRIAR   LER   ATUALIZAR APAGAR
// Operações CRUD -> CREATE, READ, UPDATE, DELETE
//                   POST,   GET,  PUT,    DELETE

// método get (carregar páginas)
// http://meusite.com/ <- GET -> Entregue a página


// UTILIZANDO O METODO GET
app.get('/', (req, res) => {
    res.send('Hello word');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
});

// mostra um formulario que tem o método post e a barra que e o endereço de envio
app.get('/formulario', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

// quando for clicado no formulario essa menssagem irá ser exibida
app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

// para que o método escute o método get precisamos especificar a porta por onde a requisiçao irá chegar

// Observação: para o serviço rodar precimos informar a porta que irá receber a requisiçao (geralmente utilizamos portas que não estão sendo utilizadas para não gerar um erro)

// argumentos (porta, função que irá fazer algo)
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

// precisamos de uma depedência de desenvolvimento nodemom
/*
    temos duas maneiras de executar:
        na mão com o comando -> npx nodemon server.js
        nos scripts do projeto -> npm start
*/