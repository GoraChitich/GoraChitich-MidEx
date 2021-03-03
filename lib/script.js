

var currentImage=0;
var images=[ '250X110668568400.jpg','paz_250x110103131473.jpg','banner_atar.jpg'];
    
function changePicture(){
    currentImage++;
    currentImage=currentImage%images.length;
    document.getElementById('changeimg').src='images/'+images[currentImage];
}

setInterval (changePicture,5000);