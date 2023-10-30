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
  var keys = Object.keys(source);
  for (var x = 0; x < keys.length; x++) {
    if (typeof source[keys[x]] == "object") {
      objectCopy(source[keys[x]], target[keys[x]])
    } else {
      target[keys[x]] = source[keys[x]];
    }
  }
}
