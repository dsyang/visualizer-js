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
            var parse_res = document.getElementById('parseOut');
            if(parse()) {
                parse_res.innerHTML = file.name + ': Valid transcript';
                parse_res.className = 'success';
            } else {
                parse_res.innerHTML = file.name + ': Parse error!';
                parse_res.className = 'fail';
            }
        };
    })(file);
    reader.readAsText(file);
};
