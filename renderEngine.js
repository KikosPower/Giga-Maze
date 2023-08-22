function backgroundUpdate() {
  var canvas = document.getElementById("background");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#777777";
  ctx.fillRect(0, 0, 1366, 768);
  var mapDraw = mapLoad(0);
  if (mapDraw != false) {
    ctx.fillStyle = "#000000";
    for (var x = 0; x < mapDraw.localX.length; x++) {
      ctx.fillRect(mapDraw.localX[x], mapDraw.localY[x], mapDraw.width[x], mapDraw.height[x]);
    }
  }
}
