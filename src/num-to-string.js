

/**  
 * Dado el numero devuelve un string en ingles
 * 
 * @param {number} number - parametro numerico que recibe la funcion
 * @returns {string} Nombre del numero en ingles
 */
function numToStringIfElse(number) {

  var result;

  // control de errores //
  if (typeof number !== 'number') {
    throw new Error('debe ser un numero');
  } else {
    if (number < 0) {
      throw new Error('debe ser un numero mayor a 0');
    } else {
      if (number > 10) {
        throw new Error('debe ser un numero menor a 11');
      } else {
        if (number === 0) { result = 'zero'; }
        if (number === 1) { result = 'one'; }
        if (number === 2) { result = 'Two'; }
        if (number === 3) { result = 'Three'; }
        if (number === 4) { result = 'Four'; }
        if (number === 5) { result = 'Five'; }
        if (number === 6) { result = 'Six'; }
        if (number === 7) { result = 'Seven'; }
        if (number === 8) { result = 'Eight'; }
        if (number === 9) { result = 'Nine'; }
        if (number === 10) { result = 'Ten'; }

        return result;
      }
    }
  }

}


/**  
 * Dado el numero devuelve un string en ingles
 * 
 * @param {number} number - parametro numerico que recibe la funcion
 * @returns {string} Nombre del numero en ingles
 */
function numToStringSwitchCase(number) {

  var result;

  // control de errores //
  if (typeof number !== 'number') {
    throw new Error('debe ser un numero');
  } else {
    if (number < 0) {
      throw new Error('debe ser un numero mayor a 0');
    } else {
      if (number > 10) {
        throw new Error('debe ser un numero menor a 11');
      } else {

        switch (number) {
          case 0:
            result = 'zero';
            break;
          case 1:
            result = 'one';
            break;
          case 2:
            result = 'Two';
            break;
          case 3:
            result = 'Three';
            break;
          case 4:
            result = 'Four';
            break;
          case 5:
            result = 'Five';
            break;
          case 6:
            result = 'Six';
            break;
          case 7:
            result = 'Seven';
            break;
          case 8:
            result = 'Eight';
            break;
          case 9:
            result = 'Nine';
            break;
          case 10:
            result = 'Ten';
            break;
          default:
            result = 'no es un numero entero';
            break;
        }
        return result;
      }
    }
  }

}


/**  
 * Dado el numero devuelve un string en ingles
 * Solo usar un return y no se pueden usar else
 * 
 * @param {number} number - parametro numerico que recibe la funcion
 * @returns {string} Nombre del numero en ingles
 */

function numToStringIfSinglereturn(number) {

  var result;

  // control de errores //
  if (typeof number !== 'number') {
    throw new Error('debe ser un numero');
  }

  if (number < 0) {
    throw new Error('debe ser un numero mayor a 0');
  }

  if (number > 10) {
    throw new Error('debe ser un numero menor a 11');
  }

  if (number === 0) { result = 'zero'; }
  if (number === 1) { result = 'one'; }
  if (number === 2) { result = 'Two'; }
  if (number === 3) { result = 'Three'; }
  if (number === 4) { result = 'Four'; }
  if (number === 5) { result = 'Five'; }
  if (number === 6) { result = 'Six'; }
  if (number === 7) { result = 'Seven'; }
  if (number === 8) { result = 'Eight'; }
  if (number === 9) { result = 'Nine'; }
  if (number === 10) { result = 'Ten'; }

  return result;

}


/**  
 * Dado el numero devuelve un string en ingles
 * Se pueden usar multiples returns pero no se pueden usar else
 * 
 * @param {number} number - parametro numerico que recibe la funcion
 * @returns {string} Nombre del numero en ingles
 */

function numToStringIfMultiplereturn(number) {


  // control de errores //
  if (typeof number !== 'number') {
    throw new Error('debe ser un numero');
  }

  if (number < 0) {
    throw new Error('debe ser un numero mayor a 0');
  }

  if (number > 10) {
    throw new Error('debe ser un numero menor a 11');
  }

  if (number === 0) { return 'zero'; }
  if (number === 1) { return 'one'; }
  if (number === 2) { return 'Two'; }
  if (number === 3) { return 'Three'; }
  if (number === 4) { return 'Four'; }
  if (number === 5) { return 'Five'; }
  if (number === 6) { return 'Six'; }
  if (number === 7) { return 'Seven'; }
  if (number === 8) { return 'Eight'; }
  if (number === 9) { return 'Nine'; }
  if (number === 10) { return 'Ten'; }

}





module.exports = {
  numToStringIfElse: numToStringIfElse,
  numToStringSwitchCase: numToStringSwitchCase,
  numToStringIfSinglereturn: numToStringIfSinglereturn,
  numToStringIfMultiplereturn: numToStringIfMultiplereturn

};