/**
 * Copyright reelyActive 2022
 * We believe in an open Internet of Things
 */


const rockerSwitch = require('./rockerswitch');
const utils = require('./utils');


const RORG_RPS = 'F6';
const DATA_LENGTH_BYTES = 7;


/**
 * Process EEP rocker position switch (RPS) telegrams.
 * @param {String} eepType The EEP type as a string.
 * @param {Object} data The raw telegram data as a hexadecimal-string or Buffer.
 * @return {Object} The processed telegram as JSON.
 */
function processRPSTelegram(eepType, data) {
  let buf = utils.convertToBuffer(data);
  eepType = utils.convertToEEPType(eepType);

  if((eepType === null) || (eepType.substring(0, 2) !== RORG_RPS) ||
     (buf === null) || (buf.length !== DATA_LENGTH_BYTES)) {
    return null;
  }

  let func = eepType.substring(3, 5);
  let type = eepType.substring(6, 9);
  let dataBuf = buf.subarray(1, 2);

  switch(func) {
    case '02':
      return rockerSwitch.process(type, dataBuf);
  }

  return null;
}


module.exports.processRPSTelegram = processRPSTelegram;
