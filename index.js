exports.get = function(){

var seconds = process.uptime();

function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

exports.print = function(){
    console.log("This was used for testing but is now an easter egg!")
}