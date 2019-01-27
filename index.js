var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];

function dwarfRollCall (dwarves){
  var arr = [];
   for (var i = 0; i < dwarves.length; i++) {
    arr.push(`${i+1}. ${dwarves[i]} `)
}
   return arr.join("")
}

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];

function summonCaptainPlanet(planeteerCalls) {
  return planeteerCalls.map(function(x) {
  return x.toUpperCase() + "!";
  
});
}

function longPlaneteerCalls(words) {
 for (var i = 0; i < words.length; i++) {
   if (words[i].length > 4)
     return true;
   }
   return false;
}



function findTheCheese(foods) {
  var cheese = ["cheddar", "gouda", "camembert"];
   	for(var i = 0; i < foods.length; i++) {
   	var cheeseidx = cheese.indexOf(foods[i]);
if (cheeseidx != -1) {
   return foods[i];
        }
   	}
    return 'no cheese!';
}

// "bob".startsWith('b') => true, "jane".startsWith("b") => false
function wordsWithB(words) {
  var b = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].startsWith('b')){
      b.push(words[i])
    }
  }
  return b
}
