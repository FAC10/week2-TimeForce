QUnit.test( "When stopTimer is run, 3 seconds after startTimer has started running. secondsUnit should equal 3", function( assert ) {
  var done1 = assert.async();
  var done2 = assert.async();

  startTimer();

  setTimeout(function() {
    console.log(secondsUnit);
    stopTimer();
    done1();
  },3200);

  setTimeout(function(){
      console.log("secondFunction");
      console.log(secondsUnit);
      assert.ok(secondsUnit===3);
      resetTimer();
      done2();
  }, 6000)
});

QUnit.test( "When resetTimer is run after startTimer had been invoked, miliseconds.innerHTML should equal 00", function( assert ) {
  var done = assert.async();
  startTimer();
  setTimeout(function() {
    resetTimer();
    assert.ok(milisecondsUnit===0&&element("miliseconds").innerHTML==="00");
    done();
  },3000);
});



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

QUnit.test( "When startTimer is run, secondsUnit should be greater than 0 after 3 seconds", function( assert ) {
  var done = assert.async();
  startTimer();
  setTimeout(function() {
    assert.ok(secondsUnit>0);
    done();
  },3000);
});

QUnit.test( "When startTimer is run, secondsUnit should be greater than 0 after 3 seconds", function( assert ) {
  var done = assert.async();
  startTimer();
  setTimeout(function() {
    assert.ok(secondsUnit>9);
    done();
  },10000);
});

QUnit.test( "When startTimer is run, secondsUnit should be greater than 0 after 3 seconds", function( assert ) {
  var done = assert.async();
  startTimer();
  setTimeout(function() {
    assert.ok(secondsUnit!==60&&secondsUnit>58||secondsUnit<=1);
    done();
  },60000);
});
