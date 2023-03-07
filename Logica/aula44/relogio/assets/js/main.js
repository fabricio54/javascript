function relogio() {
  function criaHoraDosSegundos(segundos){
    // data que foi feita 01-01-1970 00:00:00
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');
  //const iniciar = document.querySelector('.iniciar');
  //const pausar = document.querySelector('.pausar');
  //const zerar = document.querySelector('.zerar');
  let segundos = 0;
  let timer;

  function iniciarRelogio() {
    // função que adiciona os segundos a variável
    timer = setInterval(function() {
      segundos++; 
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function(e) {
    const el = e.target;

    // pega o elemento que foi clicado
    if(el.classList.contains('zerar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      segundos = 0;
    }

    if(el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciarRelogio();
    }

    if(el.classList.contains('pausar')) {
      // quando apertar em pausar ele para com a função
      clearInterval(timer);
      relogio.classList.add('pausado');
    }

  });
}

// chamada da função
relogio();
