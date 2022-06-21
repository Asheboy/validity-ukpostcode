var validity = require('@clocklimited/validity')

module.exports = validity.createValidatorAllowingFailureMessageOverride(
  validity.booleanToCallback(ukPostcodeValidator), '#{name} is not valid')

function ukPostcodeValidator (value) {
  return (/^[A-Z]{1,2}[0-9]{1,2}[A-Z]? ?[0-9][A-Z]{2}$/i).test(value);
}
