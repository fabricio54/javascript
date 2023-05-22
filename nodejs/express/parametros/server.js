const express = require('express');
const app = express();

// query strings
// /profiles/12345? (parâmetros de url)
// campanha=googleads & (querystrings)
// nome_campanha (querystrings)

app.get('/', (req, res) => {
    res.send('Hello word');
});

app.get('/formulario', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

// colocando parâmetros na url: chave idUsuarios:valor na url (123 por exemplo) tudo que for informado na url logo apos teste/ será mostrado no documento. observação: ao colocarmos uma interrogação o parâmetro pode ou não ser recebido (assim podemos acessar o teste)
app.get('/teste/:idUsuarios?', (req, res) => {
    console.log(req.params);
    //res.send(req.params);
    res.send(req.query.facebook)
    //console.log(req.query); // pegando as tostrings que foram informadas na url
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

