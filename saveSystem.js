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
  if (metaData.warpLock == false) {
    var saveData = localStorage.getItem("save" + file);
    saveData = JSON.parse(saveData);
    objectCopy()
  }
}

function newGame() {
  load("default");
  document.getElementById("startScreen").style.display = "none";
}

function objectCopy(source, target) {
  for (let x in source) {
    if (typeof source[x] == "object") {
      target[x] = {};
      objectCopy(source[x], target[x]);
    } else {
      target[x] = source[x];
    }
  }
}
