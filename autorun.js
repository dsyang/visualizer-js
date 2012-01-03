/* autorun.js
 * functionality to read transcript file
 * from GET variable
 */


/* parse GET variables from url */
var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});


var autoRun = function() {
    if($_GET['transcript']) {
        var parseid = document.getElementById('parseOut');
        text = $_GET['transcript'];
        /* replace chars that were b64-urlunsafe */
        text = text.replace(/-/g, '+');
        text = text.replace(/_/g, '/');
        /* use builtin b64 decode function */
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
