function calcular(valor1, valor2, operacao) {
    if (typeof valor1 !== 'number' || typeof valor2 !== 'number') {
      return null;
    }
  
    if (operacao !== '+' && operacao !== '-' && operacao !== '*' && operacao !== '/') {
      return null;
    }
  
    switch (operacao) {
      case '+':
        return valor1 + valor2;
      case '-':
        return valor1 - valor2;
      case '*':
        return valor1 * valor2;
      case '/':
        if (valor2 === 0) {
          return null;
        } else {
          return valor1 / valor2;
        }
    }
  }