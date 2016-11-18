var strawpolls;
var num = 0;
var box = $(".boxed");

function draw() {
    box.empty();
    box.append("<p>POLL</p>")
    box.append("<p>" + strawpolls[num].question + "</p>");
    Object.keys(strawpolls[num].choices).forEach(function(c) {
        box.append("<input type='radio' name='choice' value='" + c + "'>" + c + "<br>")
    });
};

function drawResults() {
    box.empty();
    Object.keys(strawpolls[num].choices).forEach(function(c) {
        box.append("<p>" + c + ": " + strawpolls[num].choices[c] + "</p>")
    });
};

$(document).ready(function() {
    $("#b3").click(function() {
        num = (num + 1) % strawpolls.length;
        draw();
    });
    $("#b1").click(function() {
        num -= 1;
        if (num < 0) {
            num = 0
        }

        draw();
    });
    $("#b2").click(function() {
      choice = $("input[name=choice]:checked").val();
        // ask the DOM who is being voted for
        // update strawpolls to add 1 vote to the right pool/choice
        poll_id = num
        console.log(choice)
        console.log(poll_id)
        $.post("/strawpolls/" + poll_id + "/vote/" + choice, {}).done(function (data) {
          strawpolls[poll_id] = data;
          drawResults();
        })
    });

    $.getJSON('strawpolls').done(function(json) {
        strawpolls = json.data;
        console.log(json);
        draw();
    });
});







// $("#b1").replaceWith("<button id='b1' type='button'>PREVIOUS</button>")
