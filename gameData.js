//Object Classes

class MotionBase {
  constructor(origin = [0, 0], speed = [0, 0], accel = 0) {
    this.location.origin = origin;
    this.location.speed = speed;
    this.location.accel = accel;
  }
  push(power = 0, direction = [0, 0]) {//accelerates the object
    for(let z in direction) {
      var acceleration = 0
      if (direction[z] > 0) {} else if (direction[z] < 0) {} else {
        if (this.location.speed > 0) {} else if (this.location.speed < 0) {
          acceleration = this.location.accel;
        }
      }
      this.location.speed += acceleration;
    }
  }
  move(power = 0, direction = [0, 0]) {//Makes the object move
  }
}

class Player extends MotionBase {
  constructor(origin = [0, 0]) {
    super(origin, undefined, 5);
  }
  walk() {}
}

//Static Data

var collisionData = {};

var backgroundData = {
  mapX0: {
    mapY0: {
      wall: [ [0,0], [200,0], [200,200], [0,200], "end"]
    }
  }
};

//Dynamic Data

var metaData = {
  input: {
    up: false,
    down: false,
    left: false,
    right: false,
    dash: false,
    interact: false
  }
};

//Saved Data

var playerData = {
  controls: {
    up: "KeyW",
    down: "KeyS",
    left: "KeyA",
    right: "KeyD",
    dash: "KeyJ",
    interact: "KeyK"
  }
};