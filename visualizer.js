var clear = function(){
    ctx.fillStyle = '#000000';
    //set active color to #d0e... (nice blue)
    ctx.beginPath();    //start drawing
    ctx.rect(0, 0, width, height);    // covering whole canvas
    ctx.closePath();    //end drawing
    ctx.fill();    //fill rectangle with selected color
}

var drawBody = function(color, pt) {
    // the point is (0,0) centered, but our canvas is not
    // in addition, the coordinates are scaled fucking huge
    var xscale = 1, yscale = 1;
    var truex = (pt.x/xscale) + (width/2);
    var truey = (pt.y/yscale) + (height/2);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(truex, truey, 10, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();
}

var fillBody = async.apply(drawBody, '#FFFFFF');
var eraseBody = async.apply(drawBody, '#000000');

var simLoop = function(){
    clear();

    var step = function (st) {
        async.map(st.points, eraseBody);
        st.timestep += 1;
        st.points = points[st.timestep];
        async.map(st.points, fillBody);
    }
    step(state);

    if (state.timestep < timeslices-1) {
        sim = setTimeout(simLoop, 1000 / 50);
    }
}

var startSim = function() {
    state.timestep = 0;
    state.points = points[0];
    async.map(state.points, fillBody);
    simLoop();
}

clear();
$("#go").click(startSim);

