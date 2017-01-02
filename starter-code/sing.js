
//Program that sings no# of beers on the wall in the console
var beerSong = function(){
  for (var i = 5; i >= 0; i--) {
    if (i == 0) {
      console.log("No more bottles of beer on the wall...");
      console.log("Time to go buy more beer!")
    } else if (i == 1) {
      console.log(i + " bottle of beer on the wall,");
      console.log(i + " bottle of beer!");
    } else {
      console.log(i + " bottles of beer on the wall,");
      console.log(i + " bottles of beer!");
    }
  }
};
// beerSong();


//bonus!
var beerSongBonus = function(){
  var numSongs = prompt("How many versus would you like for the road trip?");
  for (var i = numSongs; i >= 0; i--) {
    if (i == 0) {
      console.log("No more bottles of beer on the wall...");
      console.log("Time to go buy more beer!")
    } else if (i == 1) {
      console.log(i + " bottle of beer on the wall,");
      console.log(i + " bottle of beer!");
    } else {
      console.log(i + " bottles of beer on the wall,");
      console.log(i + " bottles of beer!");
    }
  }
};
// beerSongBonus();
