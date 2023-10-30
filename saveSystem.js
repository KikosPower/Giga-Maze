var lastSave = 0;

function fileCheck() {
  if (localStorage.getItem("file") == null) {
    console.log("New Game");
  } else {
    console.log("Continue");
  }
}

function save() {}

function load() {}

function newGame() {}
