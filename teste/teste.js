const assert = require('assert');
const { main } = require('../desafio/script');

const test1 = () => {
  console.log('Testa se ao enviar o valor 10 o total sera 23')
  const result = main(10);
  assert.strictEqual(result, 23);
};

const test2 = () => {
  console.log('Testa se ao enviar o valor 11 o total sera 23')
  const result = main(11);
  assert.strictEqual(result, 33);
};

const test3 = () => {
  console.log('Testa se ao enviar a letra A da erro')
  const result = main('A');
  assert.strictEqual(result, null); 
};

const runTests = () => {
  try {
    test1();
    test2();
    test3();
    console.log('Todos os testes passaram.');
  } catch (error) {
    console.error('Alguns testes falharam:', error.message);
  }
};

runTests();
