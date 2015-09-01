var getISOWeeksInYear = require('../get_iso_weeks_in_year')

describe('getISOWeeksInYear', function() {
  it('returns number of days in month of passed date', function() {
    var result = getISOWeeksInYear(new Date(2015, 1 /* Feb */, 11))
    expect(result).to.be.equal(53)
  })

  it('allows to pass string', function() {
    var date = new Date(2014, 1 /* Feb */, 11).toISOString()
    var result = getISOWeeksInYear(date)
    expect(result).to.be.equal(52)
  })

  it('allows to pass timestamp', function() {
    var date = new Date(2003, 11 /* Dec */, 30).getTime()
    var result = getISOWeeksInYear(date)
    expect(result).to.be.equal(53)
  })
})
