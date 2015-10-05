// date object, set interval, convert to hex value (remove ':')
(function() {

// Find the time
  // Find current time
  // var dog = function() {console.log('dog');}
  // var dog2 = console.log('dog');
  // var currentTime = new Date ();
  var bigFunction = function() {
    var currentTime = new Date ();
    // Grab different pieces of time
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();


    // Make it a 12-hr clock
    var twelveHrHours = (currentHours > 12) ? currentHours - 12: currentHours;
    // console.log(twelveHrHours);


    // Make all pieces double digit
    var ddHours = (twelveHrHours < 10) ? '0' + twelveHrHours: twelveHrHours;
    // console.log(ddHours);
    var ddMinutes = (currentMinutes < 10) ? '0' + currentMinutes: currentMinutes;
    // console.log(ddMinutes);
    var ddSeconds = (currentSeconds < 10) ? '0' + currentSeconds: currentSeconds;
    // console.log(ddSeconds);


    // Piece them together
    var wholeTime = ddHours + ':' + ddMinutes + ':' + ddSeconds;
    var clockDisplay = $('#clock').text(wholeTime);
    // console.log(clockDisplay);
  }
  bigFunction();

  window.setInterval(bigFunction, 1000);
  


  // var finalClock = window.setInterval(wholeTime, 500);

  // DOM stuff
  // var clockDisplay = document.querySelector('#clock');
  // var textNode = document.createTextNode(wholeTime);
  // clockDisplay.appendChild(textNode);
  


// Refresh the time
  // var finalClock = window.setInterval(currentTime, 1000);


})();




  // var resetTime = function () {
  //   return new Date ();
  // }
  // var currentTime = window.setInterval(function () {
    // return new Date ()}, 1000);




    // var clockDisplay = document.querySelector('#clock');
    // var textNode = document.createTextNode(wholeTime);
    // clockDisplay.appendChild(textNode);










