/*function mainFrame() {
  if (metaData.programRun) {
  }
}*/

document.onkeydown = function(e) {
  switch (e.code) {
    case playerData.controls.up:
      metaData.input.up = true;
      break;
  }
  console.log(e.code);
}
