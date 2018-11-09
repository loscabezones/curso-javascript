var expect = require('expect.js');
var numToString = require('../src/num-to-string.js');

describe('src/num-to-string.js', function () {

  describe('numToStringIfElse', function () {

    it('si el valor introducido no es un numero devuelve un error por throw', function () {
      var result = numToString.numToStringIfElse;
      expect(result).withArgs('texto').to.throwError(/debe ser un numero$/);
    });

    it('si el numero introducido es menor de 0 devuelve un error por throw', function () {
      var result = numToString.numToStringIfElse;
      expect(result).withArgs(-3).to.throwError(/debe ser un numero mayor a 0$/);
    });

    it('si el numero introducido es mayor de 10 devuelve un error por throw', function () {
      var result = numToString.numToStringIfElse;
      expect(result).withArgs(11).to.throwError(/debe ser un numero menor a 11$/);
    });

    it('el numero pasado devuelve el nombre del numero en ingles', function () {
      var result = numToString.numToStringIfElse;
      expect(result(3)).to.be('Three');
      expect(result(4)).to.be('Four');
      expect(result(8)).to.be('Eight');
      expect(result(10)).to.be('Ten');
    });
  });

  describe('numToStringSwitchCase', function () {

    it('el numero pasado devuelve el nombre del numero en ingles', function () {
      var result = numToString.numToStringSwitchCase;
      expect(result(3)).to.be('Three');
      expect(result(4)).to.be('Four');
      expect(result(8)).to.be('Eight');
      expect(result(10)).to.be('Ten');
    });
  });

  describe('numToStringIfSinglereturn', function () {

    it('el numero pasado devuelve el nombre del numero en ingles', function () {
      var result = numToString.numToStringIfSinglereturn;
      expect(result(3)).to.be('Three');
      expect(result(4)).to.be('Four');
      expect(result(8)).to.be('Eight');
      expect(result(10)).to.be('Ten');
    });
  });

  describe('numToStringIfMultiplereturn', function () {

    it('el numero pasado devuelve el nombre del numero en ingles', function () {
      var result = numToString.numToStringIfMultiplereturn;
      expect(result(3)).to.be('Three');
      expect(result(4)).to.be('Four');
      expect(result(8)).to.be('Eight');
      expect(result(10)).to.be('Ten');
    });
  });



});