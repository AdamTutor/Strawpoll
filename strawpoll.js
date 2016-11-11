var polls = [{
    "question": "Pepsi or Coke?",
    "choices": [{
        "name": "Pepsi",
        "count": 1
    }, {
        "name": "Coke",
        "count": 2
    }]
}, {
    "question": "Mtn Dew or Mello Yello?",
    "choices": [{
        "name": "Mtn Dew",
        "count": 1
    }, {
        "name": "Mello Yello",
        "count": 2
    }]
}];

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
