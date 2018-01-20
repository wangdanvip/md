/*
========================================================
Javascript is fun thanks to Tim Holman (http://tholman.com)!
Thank you for the guidance, Tim! 
========================================================
*/


(function() {
  var header = document.querySelector("h1");
  var selectBox = document.querySelector("select");
  var runButton = document.querySelector("button");

  // On SelectBox Change
  selectBox.addEventListener("change", function() {
    triggerAnimation();
  });

  // On "run animation" button clicked
  runButton.addEventListener("click", function(e) {
    e.preventDefault();
    triggerAnimation();
  });

  function triggerAnimation() {
    var animation = selectBox.value;
    header.className = "";
    setTimeout(function() {
      header.className = "mimic " + animation;
    }, 10);
  }
})();
