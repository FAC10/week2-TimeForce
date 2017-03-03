  function element(id){return document.getElementById(id)};
    var milisecondsUnit = 00;
    var secondsUnit = 00;
    var minutesUnit = 00;
    var hoursUnit = 00;
    var interval;
    var timerSwitch = true;
function milisecondsIncrement(){return milisecondsUnit+=1;};
function secondsIncrement(){return secondsUnit+=1;};
function minutesIncrement(){return minutesUnit+=1;};
function hoursIncrement(){return hoursUnit+=1;};




function startTimer(){
  // if(timerSwitch){
  clearInterval(interval);
  interval = setInterval(function() {
        //Miliseconds;
        milisecondsIncrement();
        element("miliseconds").innerHTML = "0" + milisecondsUnit;
        if (milisecondsUnit > 9) {
            element("miliseconds").innerHTML = milisecondsUnit;
        }
        if (milisecondsUnit > 99) {
            milisecondsUnit = 0;
            element("miliseconds").innerHTML = "0" + milisecondsUnit;

            secondsIncrement();
          element("seconds").innerHTML = "0" + secondsUnit;
        };

        if (secondsUnit > 9) {
            element("seconds").innerHTML = secondsUnit;
        };
        if (secondsUnit > 59) {
            secondsUnit = 0;
            element("seconds").innerHTML = "0" + secondsUnit;
            minutesIncrement();
            element("minutes").innerHTML = "0" + minutesUnit;
        }

        if (minutesUnit > 9) {
            element("minutes").innerHTML = minutesUnit
        };
        if (minutesUnit > 59) {
            minutesUnit = 0;
            element("minutes").innerHTML = "0" + minutesUnit;
            hoursIncrement();
            element("hours").innerHTML = "0" + hoursUnit;
        }


    }, 10);
  // }
  // timerSwitch=false;
};

function stopTimer(){
    clearInterval(interval);
    // timerSwitch=true;
}

function resetTimer(){
    clearInterval(interval);
    element("miliseconds").innerHTML = "00";
    element("seconds").innerHTML = "00";
    element("minutes").innerHTML = "00";
    element("hours").innerHTML = "00";
     milisecondsUnit = 00;
    secondsUnit = 00;
     minutesUnit = 00;
     hoursUnit = 00;
    //  timerSwitch=true;


}
window.onload=function events(){
element("startButton").addEventListener("click", startTimer);
element("stopButton").addEventListener("click", stopTimer);
element("resetButton").addEventListener("click", resetTimer);
}
