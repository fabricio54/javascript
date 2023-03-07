const lista = document.querySelector('.container');

lista.addEventListener('click', function(event) {
    const click = event.target;
    if(click.classList.contains('input')){
        const texto = lista.querySelector('texto');
        const p = lista.createElement('p');
        p.innerHTML = texto;
        lista.appendChild(p);
    }
});
