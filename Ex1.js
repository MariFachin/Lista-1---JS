function fatorial(numero) {
  if (numero < 0) {
    return "O fatorial não está definido para números negativos.";
  } else if (numero === 0 || numero === 1) {
    return 1;
  } else {
    let resultado = 1;
    for (let i = 2; i <= numero; i++)   
 {
      resultado *= i;
    }
    return resultado;
  }
}

const numero   
 = 5;
const resultado = fatorial(numero);
console.log(`O fatorial de ${numero} é: ${resultado}`);