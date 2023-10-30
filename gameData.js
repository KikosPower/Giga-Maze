//Static Data

var mapData = {
  mapX0: {
    mapY0: {
      mode: 0,
      area: false,
      wall: {
        localX: [0, 0, 1266, 1266, 0, 150, 916, 1236, 350, 350, 733],
        localY: [0, 668, 0, 668, 150, 0, 0, 150, 0, 618, 618],
        width: [100, 100, 100, 100, 200, 300, 300, 150, 666, 283, 283],
        height: [100, 100, 100, 100, 468, 768, 768, 468, 150, 150, 150]
      },
      door: false,
      item: false,
      locks: false,
      lights: false,
      cannon: false,
      hidden: {
        localX: [],
        localY: [],
        id: []
      },
      teleport: false,
      savepoint: [683, 384, 0]
    },
    mapY_1: {
      mode: 0,
      area: false,
      wall: {
        localX: [0, 0, 150],
        localY: [0, 0, 0],
        width: [40, 100, 483],
        height: [334, 50, 50]
      },
      door: {
        localX: [0],
        localY: [334],
        width: [40],
        height: [100],
        type: [0],
        id: [0]
      },
      item: false,
      locks: false,
      lights: false,
      cannon: false,
      hidden: false,
      teleport: false,
      savepoint: false
    }
  }
};

//Dynamic Data

var playerData = {
  location: {
    local: [683, 384],
    map: [0, 0],
    warp: [0, 0],
    global: [0, 0],
    velocity: [0, 0]
  },
  stats: {
    power: 1000,
    hp: 3
  },
  locks: {
    normal: [],
    timed: [],
    swap: false
  },
  items: {
    power: [],
    dash: [],
    hp: [],
    charger: [],
    scan: []
  },
  controls: {
    up: "KeyW",
    left: "KeyA",
    down: "KeyS",
    right: "KeyD",
    interact: "KeyQ",
    dash: "ShiftRight"
  }
};

var metaData = {
  programRun: false,
  warpLock: false,
  timeLimit: 0,
  input: {
    up: false,
    left: false,
    down: false,
    right: false,
    interact: false,
    dash: false
  }
}

//Data Access Functions

function mapLoad(type) {
  var mapX = playerData.location.map[0];
  if (mapX < 0) {
    mapX = "mapX_" + (mapX * -1);
  } else {
    mapX = "mapX" + mapX;
  }
  var mapY = playerData.location.map[1];
  if (mapY < 0) {
    mapY = "mapY_" + (mapY * -1);
  } else {
    mapY = "mapY" + mapY;
  }
  var output = mapData[mapX][mapY];
  switch(type) {
    case 0:
      output = output.area;
      break;
    case 1:
      output = output.wall;
      break;
    case 2:
      output = output.door;
      break;
    case 3:
      output = output.item;
      break;
    case 4:
      output = output.locks;
      break;
  }
  return output;
}
