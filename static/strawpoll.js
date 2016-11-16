
var strawpolls;


$(document).ready(function() {
    $.getJSON('strawpolls').done(function(json) {
        strawpolls = json.data;
        console.log(json);
        $(".boxed").append("<p>"+ strawpolls[0].question+"</p>");
        $(".boxed").append("<input type='radio' name='choice' value ='pepsi'>"+  strawpolls[0].choices[0].label+ "<br>")
        $(".boxed").append("<input type='radio' name='choice' value ='coke'>"+  strawpolls[0].choices[1].label)
        $("bi").append()
    });
});
