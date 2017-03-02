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

QUnit.test("", function(assert){
assert.equal(milisecondsIncrement(), "00")
});
