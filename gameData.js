//Static Data

var mapData = {
  mapX0: {
    mapY0: {
      area: false,
      wall: {
        localX: [],
        localY: [],
        width: [],
        height: []
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
    localX: 45,
    localY: 45,
    globalX: 0,
    globalY: 0,
    velocityX: 0,
    velocityY: 0
  },
  stats: {
    power: 1000,
    hp: 3,
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
