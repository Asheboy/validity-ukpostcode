const validate = require('../validator')
const assert = require('assert')

describe('Postcode Validation', function() {

  it('should correctly validate valid postcodes', function() {
    [
      'wd4 8rq',
      'wd4 8rq',
      'wd48 1rq',
      'wd48A 1rq',
      'wd1a 1rq',
      'EC1R 3AD',
      'WD48RQ'
    ].forEach(function(value) {
      validate('postcode', 'Postcode', { postcode: value }, function (error, validationError) {
        assert.equal(error, null)
        assert.equal(validationError, null)
      })
    })
  })

  it('should invalidate invaild postcodes', function() {
    [
      'a',
      '',
      '12',
      'hp1 2n'
    ].forEach(function(value) {
      validate('postcode', 'Postcode', { postcode: value }, function (error, validationError) {
        assert.equal(error, null)
        assert.equal(validationError, 'Postcode is not valid')
      })
    })
  })

})
