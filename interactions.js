function unlock(type, id, timer) {
  switch (type) {
    case "n":
      for (var x = playerData.locks.normal.length; x < id; x++) {
        playerData.locks.normal[x] = false;
      }
      playerData.locks.normal[id] = true;
      break;
    case "t":
      for (var x = playerData.locks.timed.length; x < id; x++) {
        playerData.locks.timed[x] = false;
      }
      playerData.locks.timed[x] = true;
      if (timer > 0) {
        metaData.warpLock = true;
        metaDAta.timeLimit = setTimeout(warp(), timer);
      } else {
        clearTimeout(metaData.timeLimit);
        metaData.warpLock = false;
      }
      break;
    case "s":
      if (id == 1) {
        playerData.locks.swap = true;
      } else {
        playerData.locks.swap = false;
      }
      break;
  }
}

function warp() {
  transition(.location.warp[0], .location.warp[1], .location.global[0], .location.global[1], 1)
  metaData.warpLock = false;
}
