// trabalhando como o xml (ajax). pode fazer requisição de qualquer tipo de dado

/*

const request = obj => { // criamos uma requisição que recebe um ojbjeto
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // utilizamos uma constante que recebe um construtor de xmlhttprequest
        xhr.open(obj.method, obj.url, true); // utilizando o método open do xml passamos como parâmetros: método, url, e se e ou não assincrono 
        // caso o método utilizado fosse post mandarioamos os dados para o send
        xhr.send();

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            }else {
                reject(xhr.statusText);
            }
        })
        })
}
*/

document.addEventListener('click', e => {
    const el = e.target; // pegando o elemento clicado
    const tag = el.tagName.toLowerCase();
    // pegando o nome da tag

    if(tag === 'a') {
        e.preventDefault(); // ao clicar no link eu quero q ele não va no link estou previnindo o evento
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    // criando uma constante para pegar o href

    try {
        const href = el.getAttribute('href');
        //console.log(href); // imprimindo o href

        // utilizando as promisses (then / catch) jeito mais antigo

        // englobando num catch 

        // com asinc e await
        const response = await fetch(href);

        if(response.status !== 200) throw new Error('ERRO 404');

        const html = await response.text();
        carregaResultado(html);
    } catch (error) {
        console.log(error);
    }
    // com promisses
    /*
    fetch(href)
        .then(response => {
            if(response.status !== 200) throw new Error('ERRO 404');
            return response.text();
        })
        .then(html => carregaResultado(html))
        .catch(e => console.log(e));
    */
}

// carregando aquela página a onde foi chamada a função utilizando xml (ajax) (para não ter que recarregar a página novamente)
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

// com o fech avera um retorno automático da promises (onde não precisamos fazer todo aquele código)
/*
fetch('pagina2.html')
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.error(e));
*/