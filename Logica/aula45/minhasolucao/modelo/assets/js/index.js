const lista = document.querySelector('.container');
const p = lista.querySelector('.adiciona');
const form = lista.querySelector('.texto');


lista.addEventListener('click', function(event) {
    const click = event.target;
    if(click.classList.contains('button')){
        p.innerHTML += form.;
    }
    
})
