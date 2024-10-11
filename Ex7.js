function verificarSequencia(sequencia) {
    const pilha = [];
    const pares = {
      '(': ')',
      '[': ']'
    };
  
    for (let i = 0; i < sequencia.length; i++) {
      const caractere = sequencia[i];
  
      if (caractere in pares) {
        pilha.push(pares[caractere]);
      } else {
        if (pilha.pop() !== caractere) {
          return false;
        }
      }
    }
  
    return pilha.length === 0;
  }