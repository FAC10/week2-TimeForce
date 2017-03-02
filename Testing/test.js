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
