var drop = document.getElementById("holder");

drop.ondragover = function () {this.className = 'focus'; return false;};
drop.ondragend = function () { this.className = ''; return false; };

drop.ondrop=function(e) {
    this.className = '';
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    var reader = new FileReader();
    reader.onload =  (function (file) {
        return function (e) {
            text = e.target.result;
            console.log(text.trim().split('\n').length);
            var parseid = document.getElementById('parseOut');
            parse() ?
                parseSuccess(file,parseid) : parseFail(file,parseid);
        };
    })(file);
    reader.readAsText(file);
};
