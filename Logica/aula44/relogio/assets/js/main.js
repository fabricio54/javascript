function relogio() {
  function criaHoraDosSegundos(segundos){
    // data que foi feita 01-01-1970 00:00:00
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  let segundos = 0;
  let timer;

  function iniciarRelogio() {
    // função que adiciona os segundos a variável
    timer = setInterval(function() {
      segundos++; 
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

}

// chamada da função
relogio();
