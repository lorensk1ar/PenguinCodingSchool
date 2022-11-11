var map = document.getElementById("map")
var hint = document.getElementById("hint")

var width = 400
var height = 400

var treasure = {x: Math.random()*width, y: Math.random()*height}

function newTreasure() {
  treasure.x = Math.random()*width
  treasure.y = Math.random()*height
}

newTreasure()

map.addEventListener('click', function(click) {
  var dx = click.offsetX - treasure.x
  var dy = click.offsetY - treasure.y
  var distance = Math.sqrt(dx*dx + dy*dy)

  var currentHint = "So cold"
  if (distance < 20) {
    currentHint = "Disco"
    newTreasure()
  }
  else if (distance < 40) {currentHint = "Hot"}
  else if (distance < 80) {currentHint = "Warm"}
  else if (distance < 160) (currentHint = "Cool")
  else {}
  hint.textContent = currentHint
})
