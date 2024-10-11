function calcularMediaIdades(pessoas) {
    let somaIdades = 0;
    let quantidadePessoas = pessoas.length;
  
    pessoas.forEach(pessoa => {
      somaIdades += pessoa.idade;
    });
  
    const media = somaIdades / quantidadePessoas;
    return media;
  }