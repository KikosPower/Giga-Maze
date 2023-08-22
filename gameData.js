//Static Data

var mapData = {
  mapX0: {
    mapY0: {
      area: false,
      wall: {
        localX: [0],
        localY: [0],
        width: [50],
        height: [50]
      },
      door: false,
      item: false,
      locks: false,
      cannon: false,
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
    hp: []
  }
};
