//utilizando fetch api
/*
fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementoDaPagina(json));
*/

// utilizando axious:
// com esse método não precisamos converter em json ele retorna altomaticamente os dados
axios('pessoas.json')
  .then(resposta => carregaElementoDaPagina(resposta.data));

function carregaElementoDaPagina(json) {
  const table = document.createElement('table');
  for(let pessoa of json) {
    const tr = document.createElement('tr');
    
    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.sexo;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    table.appendChild(tr);
  }
  adicionaResultado(table);
}

function adicionaResultado(table) {
  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
