var lastSave = 0;

function fileCheck() {
  if (localStorage.getItem("file") == null) {
    save("default");
    document.getElementById("startScreen").style.display = "block";
  } else {
    lastSave = localStorage.getItem("file");
    load(lastSave);
    metaData.programRun = true;
  }
}

function save(file) {
  if (metaData.warpLock == false) {
    var saveData = JSON.stringify(playerData);
    localStorage.setItem("save" + file, saveData);
    localStorage.setItem("file", file);
    lastSave = file;
  }
}

function load(file) {
  if (metaData.warpLock == false) {
    var saveData = localStorage.getItem("save" + file);
    saveData = JSON.parse(saveData);
    objectCopy(saveData, playerData);
    save(file);
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
