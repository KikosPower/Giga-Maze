//proof of concept

function pushMotion(inputNode, speed) {
    var moveX = inputNode.right - inputNode.left;
    var moveY = inputNode.down - inputNode.up;
    var multiplyer = speed.base + speed.up * inputNode.dash;
    return [moveX * multiplyer, moveY * multiplyer];
}

function locationUpdate(objLoc, inputNode) {
    objLoc.accel = moveSpeed(inputNode, )
    if (objLoc.collide) {}
}

function collisionCheck() {
    return 0
}