/*function mainFrame() {
  if (metaData.programRun) {
  }
}*/

document.onkeydown = function(e) {
  switch (e.code) {
    case playerData.controls.up:
      metaData.input.up = true;
      break;
    case playerData.controls.down:
      metaData.input.down = true;
      break;
    case playerData.controls.left:
      metaData.input.left = true;
      break;
    case playerData.controls.right:
      metaData.input.right = true;
      break;
    case playerData.controls.dash:
      metaData.input.dash = true;
      break;
    case playerData.controls.interact:
      metaData.input.interact = true;
      break;
  }
}

document.onkeyup = function(e) {
  switch (e.code) {
    case playerData.controls.up:
      metaData.input.up = false;
      break;
    case playerData.controls.down:
      metaData.input.down = false;
      break;
    case playerData.controls.left:
      metaData.input.left = true;
      break;
    case playerData.controls.right:
      metaData.input.right = false;
      break;
    case playerData.controls.dash:
      metaData.input.dash = false;
      break;
    case playerData.controls.interact:
      metaData.input.interact = false;
      break;
  }
}
