function backgroundDraw() {
  var canvas = document.getElementById("background");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#777777";
  ctx.fillRect(0, 0, 1440, 810);
}
