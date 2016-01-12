$(document).ready(function(){

var counter = 0;
var images;

  //start button to begin setTimeout, once countdown begins the start button is hidden
  var start = document.getElementById("starter");
  start.addEventListener("click", countdown);

  //timer function, expires at 20 seconds and reports total of counter function
  function countdown() {
    start.setAttribute("class", "hidden");
    setTimeout(function countAndGive(){
      $("#resultsModal").modal();
      if (counter === 1) {
        var resultMessage = "Time is up! You clicked " +counter+ " SNL Face! Click the start button to play again."
        document.getElementById("endGameResult").innerHTML = resultMessage;
      } else if (counter > 1) {
        var resultMessageMoreThanOne = "Time is up! You clicked " +counter+ " SNL Faces! Click the start button to play again."
        document.getElementById("endGameResult").innerHTML = resultMessageMoreThanOne;
      };
    }, 20000);
  }

  //add event listeners and toggle states to the images
  var images = document.getElementsByTagName("img");
  for (i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
      if (this.getAttribute("data-state") === "on") {
        counter += 1;
        this.setAttribute("data-state", "off");
      } else {
        console.log("no count");
      }
    });
  };

  //Reset game state so that user does not have to reset browser
  $("#resultsModal").on("hidden.bs.modal", function(){
    start.setAttribute("class", "btn btn-danger");
    document.getElementById("endGameResult").innerHTML = "";
    counter = 0;
    for (var i = 0; i < images.length; i++) {
      if (images[i].getAttribute("data-state") === "off") {
        images[i].setAttribute("data-state", "on");
      } else {
        console.log("already on");
      };
    };
  });
});