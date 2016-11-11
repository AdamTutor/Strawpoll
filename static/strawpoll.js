// $.getJSON("strawpoll.JSON", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });


//
// var data = $.getJSON("strawpoll/Strawpoll/strawpoll.JSON")
// console.log(data)

var strawpolls;


$(document).ready(function() {
    $.getJSON('strawpolls').done(function(json) {
        strawpolls = json.data;
        console.log(json);
    });
});
