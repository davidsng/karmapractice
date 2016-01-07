// refer to Irvin's Karma instructions: https://gist.github.com/lanbau

// var assert = require('assert')

describe('Array', () => {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5))
      assert.equal(-1, [1,2,3].indexOf(0))
    })
  })
})

describe('karma tests with chai', function() {
  it('should expose the Chai assert method', function() {
    return assert.ok('everything', 'everything is ok')
  })
  it('should expose the Chai expect method', function() {
    return expect('foo').to.not.equal('bar')
  })
  return it('should expose the Chai should property', function() {
    1..should.not.equal(2)
    return should.exist(123)
  })
})


// JASMINE stuff:
// var assert = require('assert')
//
// describe("A suite is just a function", function() {
//   var a
//
//   it("and so is a spec", function() {
//     a = true
//
//     expect(a).toBe(true)
//   })
// })
