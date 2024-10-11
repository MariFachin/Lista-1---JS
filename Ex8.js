function gerarObjetosAleatorios(quantidade) {
    const nomes = ['Ana', 'Pedro', 'Maria', 'João', 'Carlos', 'Fernanda', 'Lucas', 'Camila'];
  
    function gerarNumeroAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    const objetos = [];
    for (let i = 0; i < quantidade; i++) {
      const objeto = {
        id: i + 1,
        nome: nomes[Math.floor(Math.random() * nomes.length)],
        idade: gerarNumeroAleatorio(18, 90)
      };
      objetos.push(objeto);
    }
    return objetos;
  }