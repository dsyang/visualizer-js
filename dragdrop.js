var drop = document.getElementById("holder");

drop.ondragover = function () {this.className = 'focus'; return false;};
drop.ondragend = function () { this.className = ''; return false; };

drop.ondrop=function(e) {
    this.className = '';
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    var reader = new FileReader();
    reader.onload = function (evt) {
        text = e.target.result;
        console.log(evt.target.result);
    }
    reader.readAsText(file);
};
