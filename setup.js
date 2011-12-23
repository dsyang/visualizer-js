var text;
var points_array = new Array();
var timeslices;

var width = 800; //width of the canvas
var height = 600;    //height of the canvas
var sim;

var canvas = document.getElementById('simulation');
var ctx = canvas.getContext('2d');
canvas.width = width;
canvas.height = height;


/* sets points_array to be a multi-dimensional array of objects like */
/* {x:float y:float} returns true on success, false on failure*/
var parse = function() {
    var lines, t1, t2, t3, num_planets, i, j, x, y;
    if(typeof text !== 'undefined') {
        text = text.replace(/~/g, "-");
        lines = text.trim().split('\n');
        timeslices = lines.length;
        num_planets = lines[0].split("),(").length;
    } else {
        console.log("text undefined!");
        return false;
    }
    for(j  = 0; j < timeslices; j++) {
        /* take the line and split it */
        t1 = new Array(num_planets);
        t2 = lines[j].split("),(");
        if(num_planets !== t2.length) {
            console.log("Parsing planets fail!");
            console.log(num_planets);
            console.log(t2.length);
            console.log(t2);
            console.log(lines);
            return false;
        }
        for(i = 0; i < num_planets; i++){
            t3 = t2[i].split(",");
            if(t3.length !== 2) {
                console.log("Parsing positions fail!");
                console.log(t3);
                return false;
            }
            var x = t3[0].replace("(", "");
            var y = t3[1].replace(")", "");
            if( isNaN(parseFloat(x)) ||
                isNaN(parseFloat(y)))
            {
                console.log("Parsing positions fail!");
                console.log(t3);
                return false;
            }
            t1[i] = {x:parseFloat(x), y:parseFloat(y)}
        }
        points_array.push(t1);
    }
    return true;
};
