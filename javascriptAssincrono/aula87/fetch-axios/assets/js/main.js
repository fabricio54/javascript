fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementoDaPagina(json));

function carregaElementoDaPagina(json) {
  const table = document.createElement('table');
  for(let pessoa of json) {
    const tr = document.createElement('tr');
    
    const tdNome = document.createElement('td');
    tdNome.innerHTML = pessoa.nome;
    tr.appendChild(tdNome);

    const tdSexo = document.createElement('td');
    tdSexo.innerHTML = pessoa.sexo;
    tr.appendChild(tdSexo);

    const tdIdade = document.createElement('td');
    tdIdade.innerHTML = pessoa.idade;
    tr.appendChild(tdIdade);

    table.appendChild(tr);
  }
  adicionaResultado(table);
}

function adicionaResultado(table) {
  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
