
var strawpolls;
var num = 0;
var box = $(".boxed");

function vote(){
  "..."
}


function draw() {
  box.empty();
  box.append("<p>POLL</p>")
  box.append("<p>"+ strawpolls[num].question+"</p>");
  Object.keys(strawpolls[num].choices).forEach(function(c) {
    box.append("<input type='radio' name='choice' value='" + c + "'>"+ c + "<br>")
  });
};

function drawResults(){
  box.empty();
  Object.keys(strawpolls[num].choices).forEach(function(c) {
    box.append("<p>" + c + ": "+ strawpolls[num].choices[c] + "</p>")
  });
};

$(document).ready(function() {
    $("#b3").click(function(){
      num = (num + 1) % strawpolls.length;
      draw();
    });
    $("#b1").click(function(){
     num -= 1;
     if(num < 0){num = 0}

      draw();
    });
    $("#b2").click(function(){
      // vote(..., ...)
      drawResults()
    });

    $.getJSON('strawpolls').done(function(json) {
        strawpolls = json.data;
        console.log(json);
        draw();
    });
});







// $("#b1").replaceWith("<button id='b1' type='button'>PREVIOUS</button>")
