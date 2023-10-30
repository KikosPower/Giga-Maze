/*function mainFrame() {
  if (metaData.programRun) {
  }
}*/

document.onkeydown = function(e) {
  switch (e.code) {
    case playerData.input.up:
      metaData.input.up = true;
      break;
  }
}
