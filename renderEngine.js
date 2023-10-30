function backgroundUpdate() {
  var canvas = document.getElementById("background");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#777777";
  ctx.fillRect(0, 0, 1366, 768);
  var mapDraw = mapLoad(1);
  if (mapDraw != false) {
    ctx.fillStyle = "#000000";
    for (var x = 0; x < mapDraw.localX.length; x++) {
      ctx.fillRect(mapDraw.localX[x], mapDraw.localY[x], mapDraw.width[x], mapDraw.height[x]);
    }
  }
  mapDraw = mapLoad(2);
  if (mapDraw != false) {
    for (var x = 0; x < mapDraw.localX.length; x++) {
      var lockCheck = playerData.locks;
      switch (mapDraw.type[x]) {
        case 0:
          ctx.fillStyle = "#ff0000";
          lockCheck = lockCheck.normal[mapDraw.id[x]];
          break;
        case 1:
          lockCheck = lockCheck.timed[mapDraw.id[x]];
          break;
        case 2:
          if (mapDraw.id[x] == 0) {
            ctx.fillStyle = "#";
            lockCheck = lockCheck.swap;
          } else {
            ctx.fillStyle = "#";
            lockCheck = !lockCheck.swap;
          }
          break;
      }
      if (lockCheck == false || lockCheck == undefined) {
        ctx.fillRect(mapDraw.localX[x], mapDraw.localY[x], mapDraw.width[x], mapDraw.height[x]);
      }
    }
  }
}
