//Static Data

var mapData = {
  mapX0: {
    mapY0: {
      area: false,
      wall: {
        localX: [0, 0],
        localY: [0, 668],
        width: [100, 100],
        height: [100, 100]
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
      teleport: {
        localX: [],
        localY: [],
        type: [1]
      }
    }
  }
};

//Dynamic Data

var playerData = {
  location: {
    local: [683, 384],
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
  }
};

function mapLoad(type) {
  var mapX = playerData.location.global[0];
  if (mapX < 0) {
    mapX = "mapX_" + (mapX * -1);
  } else {
    mapX = "mapX" + mapX;
  }
  var mapY = playerData.location.global[1];
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
