/**** parse GET variables from url ****/
var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

//console.log(document.location);

console.log($_GET["transcript"]);


var autoRun = function() {
    if($_GET['transcript']) {
        var parseid = document.getElementById('parseOut');
        text = $_GET['transcript'];
        text = text.replace(/-/g, '+');
        text = text.replace(/_/g, '/');
        text = window.atob(text);
        if(parse()) {
            parseSuccess({name: "GET variable"}, parseid);
            startSim();
        } else {
            parseFail({name: "GET variable"}, parseid);
        }
    }

};

autoRun();
