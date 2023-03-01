const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

// pega todo o estilo do elemento que foi selecionado
const estiloBody = getComputedStyle(document.body);

// agora pegamos elemento de style que desejamos utiliazar
const backgroundColorBody = estiloBody.backgroundColor;

// mudando a cor de fundo do parágrafo e a cor da fonte
for(let p in ps) {
    // pegando cada elemento e o seu style e modificando com a interação do for
    ps[p].style.backgroundColor = backgroundColorBody;
    ps[p].style.color = 'white';
}
