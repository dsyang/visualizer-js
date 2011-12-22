var clear = function(){
    ctx.fillStyle = '#000000';
    //set active color to #d0e... (nice blue)
    ctx.beginPath();    //start drawing
    ctx.rect(0, 0, width, height);    // covering whole canvas
    ctx.closePath();    //end drawing
    ctx.fill();    //fill rectangle with selected color
}


var SimLoop = function(){
    clear();
    sim = setTimeout(SimLoop, 1000 / 50);
}
SimLoop();
