
var strawpolls;
var num = 0;
var box = $(".boxed");


function draw() {
  box.empty();
  box.append("<p>POLL</p>")
  box.append("<p>"+ strawpolls[num].question+"</p>");
  box.append("<input type='radio' name='choice' value ='pepsi'>"+  strawpolls[num].choices[0].label+ "<br>")
  box.append("<input type='radio' name='choice' value ='coke'>"+  strawpolls[num].choices[1].label)

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

    $.getJSON('strawpolls').done(function(json) {
        strawpolls = json.data;
        console.log(json);
        draw();
    });
});





// $("#b1").replaceWith("<button id='b1' type='button'>PREVIOUS</button>")
