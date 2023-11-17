const readlineSync = require('readline-sync');

function main(valorDigitado) {
  let soma = 0;

  if(isNaN(valorDigitado)) {
    console.log('Por favor digite um numero')
    return null
  }

  for (let i = 1; i < valorDigitado; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }

  console.log(`A soma dos números menores que ${valorDigitado} e divisíveis por 3 ou 5 é: ${soma}`);
  return soma;
}

if (require.main === module) {
  const valorDigitado = parseFloat(readlineSync.question('Digite um numero: '));
  main(valorDigitado);
}

module.exports = { main };
