
function resetScript(){
  clearInterval(interval);
  milisecondsUnit=00;
  secondsUnit=00;
  minutesUnit=00;
  hoursUnit=00;
  element("miliseconds").innerHTML="00";
  element("minutes").innerHTML="00";
  element("seconds").innerHTML="00";
  element("hours").innerHTML="00";
};
function dom() {
  console.dir(element('seconds'))

}

dom();
QUnit.module( "Incrementation", function(assert){
//Tests to see whether the units of time increment when returning the function
  QUnit.test("milisecondsIncrement should return 1", function(assert){
  assert.equal(milisecondsIncrement(), 1);
    resetScript();
  });

  QUnit.test("secondsIncrement should return 1", function(assert){
  assert.equal(secondsIncrement(), 1);
    resetScript();
  });
  QUnit.test("minutesIncrement should return 1", function(assert){
  assert.equal(minutesIncrement(), 1);
    resetScript();
  });
  QUnit.test("hoursIncrement should return 1", function(assert){
  assert.equal(hoursIncrement(), 1);
    resetScript();
  });


});


QUnit.module("breakLimit", function(assert){
    QUnit.test("minutes cannot equal 60 once minutesUnit is equal to 59 and one full minute passes", function(assert){
      var done = assert.async();
        minutesUnit=59;
        startTimer();
        setTimeout(function () {
          clearInterval(interval);
          assert.ok(minutesUnit===0);
          console.log(minutesUnit);
          resetScript();
          done();
        }, 60200);

    })
})

QUnit.module("stopTimer", function(assert){
  QUnit.test( "When stopTimer is run, 3 seconds after startTimer has started running. secondsUnit should still equal 3 after another 3 seconds", function( assert ) {
    var done1 = assert.async();
    var done2 = assert.async();

    startTimer();

    setTimeout(function() {
      stopTimer();
      done1();
    },3200);

    setTimeout(function(){
        assert.ok(secondsUnit===3);
        console.log(secondsUnit);
        resetScript();
        done2();
    }, 6000)

  });
  QUnit.test( "When stopTimer is run, 3 seconds after startTimer has started running. secondsUnit.innerHTML should equal 03", function( assert ) {
    var done1 = assert.async();
    var done2 = assert.async();

    startTimer();

    setTimeout(function() {
      stopTimer();
      done1();
    },3200);

    setTimeout(function(){
        assert.ok(element("seconds").innerHTML==="03");
        console.log(secondsUnit);
        resetScript();
        done2();
    }, 6000)

  });
  QUnit.test( "When stopTimer is run, 3 seconds after startTimer has started running. minutes.innerHTML===00", function( assert ) {
    var done1 = assert.async();
    var done2 = assert.async();

    startTimer();

    setTimeout(function() {
      stopTimer();
      done1();
    },3200);

    setTimeout(function(){
        assert.ok(element("minutes").innerHTML==="00");
        console.log(secondsUnit);
        resetScript();
        done2();
    }, 6000)

  });
})



QUnit.module("resetTimer", function(assert){
  //Test to see whether resetTimer actually returns the innerHTML of the units of time back to "oo"
  QUnit.test( "When resetTimer is run 2 seconds after startTimer had been invoked, miliseconds.innerHTML should equal 00 and milisecondsUnit===0", function( assert ) {
    var done = assert.async();
    startTimer();
    setTimeout(function() {
      resetTimer();
      assert.ok(milisecondsUnit===0&&element("miliseconds").innerHTML==="00");
      resetScript();
      done();
    },2000);

  });

  QUnit.test( "When resetTimer is run 2 seconds after startTimer had been invoked, seconds.innerHTML should equal 00 and secondsUnit===0", function( assert ) {
    var done = assert.async();
    startTimer();
    setTimeout(function() {
      resetTimer();
      assert.ok(secondsUnit===0&&element("seconds").innerHTML==="00");
      resetScript();
      done();
    },2000);
});
QUnit.test( "When resetTimer is run 2 seconds after startTimer had been invoked, minutes.innerHTML should equal 00 minutesUnit===0", function( assert ) {
  var done = assert.async();
  startTimer();
  setTimeout(function() {
    resetTimer();
    assert.ok(minutesUnit===0&&element("minutes").innerHTML==="00");
    resetScript();
    done();
  },2000);
});
QUnit.test( "When resetTimer is run 2 seconds after startTimer had been invoked, hours.innerHTML should equal 00 hourssUnit===0", function( assert ) {
  var done = assert.async();
  startTimer();
  setTimeout(function() {
    resetTimer();
    assert.ok(hoursUnit===0&&element("hours").innerHTML==="00");
    resetScript();
    done();
  },2000);
})

});



QUnit.module("DomElements", function(assert){

//Tests to see that once element gets returned, its initia value
// is equal to "00" and that the type is an object
  QUnit.test("if input equals minutes, element(minutes).innerHTML should equal 00", function(assert){
  assert.equal(element("minutes").innerHTML, "00")
  });
  QUnit.test("if input equals seconds, element(seconds).innerHTML should equal 00", function(assert){
  assert.equal(element("seconds").innerHTML, "00")
  });
  QUnit.test("if input equals hours, element(hours).innerHTML should equal 00", function(assert){
  assert.equal(element("hours").innerHTML, "00")
  });
  QUnit.test("if input equals miliseconds, element(miliseconds).innerHTML should equal 00", function(assert){
  assert.equal(element("miliseconds").innerHTML, "00")
  });
  QUnit.test("if input equals typeof miliseconds, it should return an object", function(assert){
  assert.equal(typeof element("miliseconds"), "object")
  });

})







QUnit.module("startTimer", function(assert){

//Tests to see whether startTimer actually increments the second unit icremements
//Also testing to see whether the innerHTMl actually updates
  QUnit.test( "When startTimer is run, secondsUnit should be greater than 0 after 2 seconds", function( assert ) {
    var done = assert.async();
    startTimer();
    setTimeout(function() {
      assert.ok(secondsUnit>0);
      resetScript();
      console.log(secondsUnit);
      done();
    },2000);
  });

  QUnit.test( "When startTimer is run, element('seconds').innerHTML should be equal 0 + 7 after 7 seconds", function( assert ) {
    var done = assert.async();
    startTimer();
    setTimeout(function() {
      assert.ok(element("seconds").innerHTML==="07");
      resetScript();
      done();
    },7200);

  });

  QUnit.test( "When startTimer is run, secondsUnit should be greater than 9 after 10 seconds", function( assert ) {
    var done = assert.async();
    startTimer();
    setTimeout(function() {
      assert.ok(secondsUnit>9);
      resetScript();
      done();
    },10200);

  });

  QUnit.test( "When startTimer is run, secondsUnit should equal 0 after 60 seconds", function( assert ) {
    var done = assert.async();
    startTimer();
    setTimeout(function() {
      assert.ok(secondsUnit===0);
      console.log(secondsUnit);
      resetScript();
      done();
    },60200);

  });


})
