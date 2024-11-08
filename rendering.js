function backgroundDraw() {
  //Loads the canvas, and paints the default background color.
  var canvas = document.getElementById("background");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#777777";
  ctx.fillRect(0, 0, 1440, 810);
  //Starts drawing the walls
  ctx.fillStyle = "#000000";
  coord = fakeMap.wall;
  ctx.beginPath();
  for(let c in coord) {
    if (coord[c] == "end") {
      ctx.closePath();
    }
  }
}

//Development data file
//don't make it into a coconut
var fakeMap = {
  wall: [ ]
};
