var lastSave = 0;

function fileCheck() {
  localStorage.setItem("default", 0);
  if (localStorage.getItem("file") == null) {
    document.getElementById("startScreen").style.display = "block";
  } else {
    lastSave = localStorage.getItem("file")
    load(lastSave);
  }
}

function save(file) {
  if (metaData.warpLock == false) {
    var saveData = JSON.stringify(playerData);
    localStorage.setItem("save" + file, saveData);
  }
}

function load(file) {
  var saveData = localStorage.getItem("save" + file);
}

function newGame() {
  load("default");
  document.getElementById("startScreen").style.display = "none";
}
