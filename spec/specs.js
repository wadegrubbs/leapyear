describe('leapYear', function() {
  it("is false for a year that is not divisible by 4, 100, or 400", function() {
    expect(leapYear(1993)).to.equal(false);
  });

  it("is true for years divisible by 4", function () {
    expect(leapYear(2004)).to.equal(true);
  });
  it("is false for years divisible by 100", function() {
    expect(leapYear(1900)).to.equal(false);
  });
  it("is true for years divisible by 400", function() {
    expect(leapYear(2000)).to.equal(true);
  });
  it("is false if input is not numeric", function() {
    expect(leapYear("yes")).to.equal(false);
  });
  it("is false if number is negative ", function() {
    expect(leapYear(-1)).to.equal(false);
  });
  it("is false if number is NaN ", function() {
    expect(leapYear(NaN)).to.equal(false);
  });
  it("is false if number is zero ", function() {
    expect(leapYear(0)).to.equal(false);
  });
});
