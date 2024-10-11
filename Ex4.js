function gerarTabuada(numero) {
    const tabuada = [];
  
    for (let i = 1; i <= 10; i++) {
      tabuada.push(numero * i);
    }
  
    return tabuada;
  }