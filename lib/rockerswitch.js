/**
 * Copyright reelyActive 2022
 * We believe in an open Internet of Things
 */


const utils = require('./utils');


const DATA_LENGTH_BYTES = 1;


/**
 * Process a Rocker Switch, 2-Rocker RPS telegram.
 * @param {String} type The specific type of telegram.
 * @param {Object} data The raw telegram as a hexadecimal-string or Buffer.
 * @return {Object} The processed telegram as JSON.
 */
function process(type, data) {
  let buf = utils.convertToBuffer(data);
  if((buf === null) || (buf.length !== DATA_LENGTH_BYTES)) {
    return null;
  }

  let isButtonPressed = [ false, false, false, false ];

  // Reference: http://tools.enocean-alliance.org/EEPViewer/
  switch(type) {
    case '02':
      let firstButtonIndex = (buf.readUInt8() >> 5) & 0x07;
      let isPressed = (buf.readUInt8() & 0x10) === 0x10;
      let secondButtonIndex = (buf.readUInt8() >> 1) & 0x07;
      let isSecondValid = (buf.readUInt8() & 0x01) === 0x01;

      if(isPressed) {
        isButtonPressed[firstButtonIndex] = true;
        if(isSecondValid) {
          isButtonPressed[secondButtonIndex] = true;
        }
      }
      break;
    default:
      return null;
  }

  return { isButtonPressed: isButtonPressed };
}


module.exports.process = process;
