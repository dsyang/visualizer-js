/* fileinput.js
 * functionality to parse file
 * chosen by the file select box
 */

var fileInput = document.getElementById("transcript");

fileInput.onchange = function(evt) {
    var files = evt.target.files; // FileList object

    var trans = files[0];
    var reader = new FileReader();
    reader.onload = (function (file) {
        return function (e) {
            text = e.target.result;
            console.log(text.trim().split('\n').length);
            var parseid = document.getElementById('parseOut');
            parse() ?
                parseSuccess(file, parseid) : parseFail(file, parseid);
        };
    })(trans);
    reader.readAsText(trans);
};
