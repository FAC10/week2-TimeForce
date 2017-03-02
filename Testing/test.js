QUnit.test("if input equals minutes, element(minutes).innerHTML should equal 00", function(assert){
assert.equal(element("minutes").innerHTML, "00")
});
QUnit.test("if input equals seconds, element(seconds).innerHTML should equal 00", function(assert){
assert.equal(element("seconds").innerHTML, "00")
});
QUnit.test("if input equals hours, element(hours).innerHTML should equal 00", function(assert){
assert.equal(element("hours").innerHTML, "00")
});
/*
QUnit.test("if input equals miliseconds, element(miliseconds).innerHTML should equal 00", function(assert){
assert.equal(element("miliseconds").innerHTML, "00")
});
*/

QUnit.test("milisecondsIncrement should return 1", function(assert){
assert.equal(milisecondsIncrement(), 1)
});

QUnit.test("secondsIncrement should return 1", function(assert){
assert.equal(secondsIncrement(), 1)
});
QUnit.test("minutesIncrement should return 1", function(assert){
assert.equal(minutesIncrement(), 1)
});
QUnit.test("hoursIncrement should return 1", function(assert){
assert.equal(hoursIncrement(), 1)
});

/*
('after one second passes, seconds should equal 1', function() {
setTimeout(function() {
assert.equal(true);
    // After the assertion has been called,
    // continue the test
    start();
}, 100)
})
*/

QUnit.test( "assert.async() test", function( assert ) {
  var done = assert.async();
  startTimer();
  setTimeout(function() {
    assert.ok(secondsUnit>0);
    done();
  },3000);
});
