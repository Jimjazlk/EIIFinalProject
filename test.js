const assert = require('assert');
const fs = require('fs');

const htmlContent = fs.readFileSync('./index.html', 'utf8');

describe('Prueba de la página web', () => {
  it('Debe contener el texto "Hola Mundo"', () => {
    assert.ok(htmlContent.includes('¡Hola Mundo!'));
  });

  it('Debe tener una etiqueta h1', () => {
    assert.ok(htmlContent.includes('<h1>'));
  });
});