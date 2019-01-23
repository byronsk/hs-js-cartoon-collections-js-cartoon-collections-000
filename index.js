var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];

function dwarfRollCall (dwarves){
  var array = [];
   for (var i = 0; i < dwarves.length; i++) {
    array.push(`${i+1}. ${dwarves[i]} `)
}
   return array.join("")
}

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];

function summonCaptainPlanet(planeteerCalls) {
  return planeteerCalls.map(function(x) {
  return x.toUpperCase() + "!";
});
}

function longPlaneteerCalls(words) {
 for (var i = 0; i < words.length; i++) {
   if (words.length > 4)
     return true;
   }
   return false;
}



function findTheCheese(foods) {
  var indices = [];
  var cheese = ["cheddar", "gouda", "camembert"];
   	for(var i = 0; i < foods.length; i++) {
   	var cheeseidx = cheese.indexOf(foods[i]);
while (cheeseidx !== -1) {
  indices.push(cheeseidx);
   return foods[i];
        }
   	}
    return 'no cheese!';
}
