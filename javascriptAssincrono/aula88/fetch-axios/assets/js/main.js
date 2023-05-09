// exercicio utilizando as três formas de passar dados

// xml
/*
const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xh = new XMLHttpRequest();
    xh.open(obj.method, obj.url, true);
    
    xh.addEventListener('load', e => {
      if(xh.status >= 200 && xh.status <= 300) {
        resolve(xh.responseText);
      }else{
        reject(xh.status);
      }
    })
  })
}
*/

// fetch
/*
fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(dados => inseriDadosNaTela(dados))
*/

//axios
/* axios('pessoas.json')
  .then(dados => dados.json());
*/

const mostraLista = document.querySelector('.container');

mostraLista.addEventListener('click', e => {
  const el = e.target;

  if(el.tagName.toLowerCase() === 'a') {
    e.preventDefault();
    //carregaLista(el);
    const href = el.getAttribute('href');
    /*
    fetch(href)
      .then(resposta => resposta.json())
      .then(dados => inseriDadosNaTela(dados))
       */
    //axios(href)
      //.then(dados => inseriDadosNaTela(dados.data));
    
  }
 
  
})

function carregaLista(el) {
  const href = el.getAttribute('href');
  request({
    method: 'GET',
    url: href,
  })
  .then(resposta => resposta.json())
  .then(dados => inseriDadosNaTela(dados));
}

function inseriDadosNaTela(dados) {
  const table = document.createElement('table');

  for (let pessoa of dados) {
    const tr = document.createElement('tr');
    let tdNome = document.createElement('td');
    
    tdNome.innerHTML = pessoa.nome;
    tr.appendChild(tdNome);

    let tdSobrenome = document.createElement('td');
    tdSobrenome.innerHTML = pessoa.sobrenome;
    tr.appendChild(tdSobrenome);

    let tdSexo = document.createElement('td');
    tdSexo.innerHTML = pessoa.sexo;
    tr.appendChild(tdSexo);

    table.appendChild(tr);
  }
  const resultado = document.querySelector('.resultado');

  resultado.appendChild(table);
}