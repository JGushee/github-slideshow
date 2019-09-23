var restrict = window.prompt("Enter a letter to restrict the list of songs");

function addFavoriteSong(songName){
    if (!songName.includes(restrict))
    favoriteSongs.push(songName);
}


var favoriteSongs = [];

addFavoriteSong("Trap");
addFavoriteSong("Paranoid");
addFavoriteSong("Hand of God");
addFavoriteSong("MIDDLE CHILD");
addFavoriteSong("Star");


function printFavoriteSongs(){
    console.log("Favorite Songs: " + favoriteSongs.length)
    console.log(favoriteSongs)
}

printFavoriteSongs();
