function repetirMensagem(mensagem, N) {
    if (typeof N !== 'number' || N <= 0) {
      return "Número de repetições inválido. Por favor, insira um número positivo.";
    }

    const arrayDeMensagens = Array(N).fill(mensagem);
  
    return arrayDeMensagens.join(' ');
  }