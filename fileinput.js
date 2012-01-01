var fileInput = document.getElementById("transcript");

fileInput.onchange = function(evt) {
    var files = evt.target.files; // FileList object

    var trans = files[0];
    var reader = new FileReader();
    reader.onload = (function (file) {
        return function (e) {
            text = e.target.result;
            console.log(text.trim().split('\n').length);
            var parse_res = document.getElementById('parseOut');
            if(parse()) {
                parse_res.innerHTML = file.name + ': Valid transcript';
                parse_res.className = 'success';
                $("#go").show();
            } else {
                parse_res.innerHTML = file.name + ': Parse error!';
                parse_res.className = 'fail';
            }
        };
    })(trans);
    reader.readAsText(trans);
};
