function inverterNumero(numero) {
    const numeroEmString = numero.toString();
  
    const numeroInvertidoEmString = numeroEmString.split('').reverse().join('');
    const numeroInvertido = parseInt(numeroInvertidoEmString);
  
    return numeroInvertido;
  }