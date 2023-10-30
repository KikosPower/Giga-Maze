var lastSave = 0;

function fileCheck() {
  if (localStorage.getItem("file") == null) {
    document.getElementById("startScreen").display = "block";
  } else {
    console.log("Continue");
  }
}

function save() {}

function load() {}

function newGame() {}
