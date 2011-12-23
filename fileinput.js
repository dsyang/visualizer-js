function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var trans = files[0];
    var output = ['<li><strong>', trans.name, '</strong> (', trans.type || 'n/a', ') - ',
    trans.size, '</li>'].join('');

    var reader = new FileReader();
    reader.onload = (function (file) {
        return function (e) {
            text = e.target.result;
            console.log(text.trim().split('\n').length);
            var parse_res = document.getElementById('parseOut');
            if(parse()) {
                parse_res.innerHTML = 'Valid';
                parse_res.className = 'success';
            } else {
                parse_res.innerHTML = 'Invalid';
                parse_res.className = 'fail';
            }
        };
    })(trans);
    reader.readAsText(trans);
}

document.getElementById('transcript').addEventListener('change', handleFileSelect, false);
