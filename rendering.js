function backgroundDraw() {
  //Loads the canvas, and paints the default background color.
  var canvas = document.getElementById("background");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#777777";
  ctx.fillRect(0, 0, 1440, 810);
  //Starts drawing the walls
  ctx.fillStyle = "#000000";
  coord = fakeMap.wall;
  var newPath = true;
  for(let c in coord) {
    if (newPath) {
      ctx.beginPath();
      ctx.moveTo(coord[c][0], coord[c][1]);
      newPath = false;
    } else if (coord[c] == "end") {
      ctx.fill();
      newPath = true;
    } else {
      ctx.lineTo(coord[c][0], coord[c][1]);
    }
  }
}

//Development data file
//don't make it into a coconut
var fakeMap = {
  wall: [ ]
};
