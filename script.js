  function element(id){return document.getElementById(id)};
    var milisecondsUnit = 00;
    var secondsUnit = 00;
    var minutesUnit = 00;
    var hoursUnit = 00;

function milisecondsIncrement(){milisecondsUnit++;return;}
function secondsIncrement(){secondsUnit++;return;}
function minutesIncrement(){minutesUnit++;return;}
function hoursIncrement(){hoursUnit++;return;}

  var timer =   setInterval(function() {
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
