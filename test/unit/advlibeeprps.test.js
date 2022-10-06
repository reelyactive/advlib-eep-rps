/**
 * Copyright reelyActive 2022
 * We believe in an open Internet of Things
 */


const advlib = require('../../lib/advlibeeprps.js');
const assert = require ('assert');


// Input data for the scenario
const INPUT_DATA_INVALID_EEP_TYPE = 'fail';
const INPUT_DATA_INVALID_HEX_STRING = 'xyz';
const INPUT_DATA_TOO_SHORT_BUFFER = Buffer.from('', 'hex');
const INPUT_DATA_ROCKER_SWITCH_EEP_TYPE = 'F6-02-02';
const INPUT_DATA_ROCKER_SWITCH = 'f650002e0069b0';


// Expected outputs for the scenario
const EXPECTED_DATA_INVALID_INPUT = null;
const EXPECTED_DATA_ROCKER_SWITCH = {
    isButtonPressed: [ false, false, true, false ]
}


// Describe the scenario
describe('advlib-eep-rps', function() {

  // Test the process function with no input data
  it('should handle no input data', function() {
    assert.deepEqual(advlib.processRPSTelegram(), EXPECTED_DATA_INVALID_INPUT);
  });

  // Test the process function with an invalid EEP type
  it('should handle an invalid EEP type as input', function() {
    assert.deepEqual(advlib.processRPSTelegram(INPUT_DATA_INVALID_EEP_TYPE),
                     EXPECTED_DATA_INVALID_INPUT);
  });

  // Test the process function with valid rocker switch data
  it('should handle valid rocker switch data as input', function() {
    assert.deepEqual(advlib.processRPSTelegram(
                                              INPUT_DATA_ROCKER_SWITCH_EEP_TYPE,
                                              INPUT_DATA_ROCKER_SWITCH),
                                              EXPECTED_DATA_ROCKER_SWITCH);
  });

});
