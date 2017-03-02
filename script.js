  function element(id){return document.getElementById(id)};
    var milisecondsUnit = 00;
    var secondsIncrement = 00;
    var minutesIncrement = 00;
    var hoursIncrement = 00;

function milisecondsIncrement(){milisecondsUnit++;return;}

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

            secondsIncrement++;
          element("seconds").innerHTML = "0" + secondsIncrement;
        };

        if (secondsIncrement > 9) {
            element("seconds").innerHTML = secondsIncrement
        };
        if (secondsIncrement > 59) {
            secondsIncrement = 0;
            element("seconds").innerHTML = "0" + secondsIncrement;
            minutesIncrement++;
            element("minutes").innerHTML = "0" + minutesIncrement;
        }

        if (minutesIncrement > 9) {
            element("minutes").innerHTML = minutesIncrement
        };
        if (minutesIncrement > 59) {
            minutesIncrement = 0;
            element("minutes").innerHTML = "0" + minutesIncrement;
            hoursIncrement++;
            element("hours").innerHTML = "0" + hoursIncrement;
        }


    }, 10);
