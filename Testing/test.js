//AS WE ARE UPDATING GLOBAL VARIABLES WE HAVE TO MAKE SURE THAT THESE ARE RESET AFTER EACH TEST HAS COMPLETED running
//THIS ENABLES US TO RUN ATOMIC TESTS, I.E. TESTS THAT ARE TOTALLY INDEPEDENT OF EACHOTHER
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



//EVENTLISTENER TESTS
//THIS TEST BASICALLY TESTS WHETHER THE FUNCTION THAT CONTAINS THE EVENTLISTENERS ACTUALLY RUNS WITH NO ERRORS
//WE'RE TESTING WHETHER TO SEE IF A GLOBAL VARIABLE HAS BEEN ALTERED AS THIS IS THE LAST LINE INSIDE THE EVENTLISTENER FUNCTION
//WE TRUST THE JAVASCRIPT ENGINE TO ADD EVENTLISTENERS TO OUR SPECIFIED ELEMENTS AND THEREFORE DON'T NEED TO TEST THAT
var that = this;
QUnit.module("eventlisteners", function(assert){
  QUnit.test("When the onload function is run, the variable listenEvent should return true", function(assert){
    console.log(listenEvent);
    that.onload();
    console.log(listenEvent)
    assert.ok(listenEvent===true);

  })


})

//TIME INCREMENTATION TESTS
//THE TIME INCREMENTATION TESTS SHOULD RETURN 1 AS IT'S INITIALLY SET TO 0
QUnit.module( "Incrementation", { beforeEach: resetScript }, function(assert){
//Tests to see whether the units of time increment when returning the function
  QUnit.test("milisecondsIncrement should return 1", function(assert){
  assert.equal(milisecondsIncrement(), 1);

  });

  QUnit.test("secondsIncrement should return 1", function(assert){
  assert.equal(secondsIncrement(), 1);

  });
  QUnit.test("minutesIncrement should return 1", function(assert){
  assert.equal(minutesIncrement(), 1);

  });
  QUnit.test("hoursIncrement should return 1", function(assert){
  assert.equal(hoursIncrement(), 1);

  });


});


//TIMECONVENTION TESTS
//THIS TEST INITIALLY TOOK OVER A MINUTE TO RUN, BECAUSE I WAS WAITING FOR ONE MINUTE TO passes
//JWILES THEN POINTED OUT THAT I COULD SECONDS ALSO EQUAL TO 59 AND JUST SET THE TIMEOUT FUNCTION EQUAL TO 1 SECONDS
//SAVES SO MUCH TIME AND ALLOWS US TO RUN MULTIPLE TESTS
QUnit.module("breakLimit", function(assert){
    QUnit.test("minutes should equal 0 once minutesUnit is equal to 59 and secondsUnit is equal to 59 and one second passes", function(assert){
      var done = assert.async();
        minutesUnit=59;
        secondsUnit=59;
        startTimer();
        setTimeout(function () {
          clearInterval(interval);
          assert.ok(minutesUnit===0);
          console.log(minutesUnit);
          resetScript();
          done();
        }, 1100);

    });

    QUnit.test( "When startTimer is run, secondsUnit should equal 0 after 1 second when it is initially set to 59", function( assert ) {
      var done = assert.async();
      secondsUnit=59;
      startTimer();
      setTimeout(function() {
        assert.ok(secondsUnit===0);
        console.log(secondsUnit);
        done();
      },1100);

    });

})


//STOPTIMER TESTS
QUnit.module("stopTimer", { beforeEach: resetScript }, function(assert){
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
        done2();
    }, 6000)

  });
})


//RESET TIMER TESTS
QUnit.module("resetTimer", { beforeEach: resetScript },  function(assert){
  //Test to see whether resetTimer actually returns the innerHTML of the units of time back to "oo"
  QUnit.test( "When resetTimer is run 2 seconds after startTimer had been invoked, miliseconds.innerHTML should equal 00 and milisecondsUnit===0", function( assert ) {
    var done = assert.async();
    startTimer();
    setTimeout(function() {
      resetTimer();
      assert.ok(milisecondsUnit===0&&element("miliseconds").innerHTML==="00");
      done();
    },2000);

  });

  QUnit.test( "When resetTimer is run 2 seconds after startTimer had been invoked, seconds.innerHTML should equal 00 and secondsUnit===0", function( assert ) {
    var done = assert.async();
    startTimer();
    setTimeout(function() {
      resetTimer();
      assert.ok(secondsUnit===0&&element("seconds").innerHTML==="00");
      done();
    },2000);
});
QUnit.test( "When resetTimer is run 2 seconds after startTimer had been invoked, minutes.innerHTML should equal 00 minutesUnit===0", function( assert ) {
  var done = assert.async();
  startTimer();
  setTimeout(function() {
    resetTimer();
    assert.ok(minutesUnit===0&&element("minutes").innerHTML==="00");
    done();
  },2000);
});
QUnit.test( "When resetTimer is run 2 seconds after startTimer had been invoked, hours.innerHTML should equal 00 hourssUnit===0", function( assert ) {
  var done = assert.async();
  startTimer();
  setTimeout(function() {
    resetTimer();
    assert.ok(hoursUnit===0&&element("hours").innerHTML==="00");
    done();
  },2000);
})

});


//DOM ELEMENT TESTS
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






//STARTTIMER FUNCTION TESTS
QUnit.module("startTimer",{ beforeEach: resetScript }, function(assert){

//Tests to see whether startTimer actually increments the second unit icremements
//Also testing to see whether the innerHTMl actually updates
  QUnit.test( "When startTimer is run, secondsUnit should be greater than 0 after 2 seconds", function( assert ) {
    var done = assert.async();
    startTimer();
    setTimeout(function() {
      assert.ok(secondsUnit>0);
      console.log(secondsUnit);
      done();
    },2000);
  });

  QUnit.test( "When startTimer is run, element('seconds').innerHTML should be equal 0 + 7 after 7 seconds", function( assert ) {
    var done = assert.async();
    startTimer();
    setTimeout(function() {
      assert.ok(element("seconds").innerHTML==="07");
      done();
    },7200);

  });

  QUnit.test( "When startTimer is run, secondsUnit should be greater than 9 after 10 seconds", function( assert ) {
    var done = assert.async();
    startTimer();
    setTimeout(function() {
      assert.ok(secondsUnit>9);
      done();
    },10200);

  });



})
