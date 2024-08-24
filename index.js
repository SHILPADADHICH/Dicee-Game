var randomNumber1 = Math.floor(Math.random()*6)+1;
var ImgRandom = "images/dice"+ randomNumber1+ ".png";
document.querySelector(".img1").setAttribute("src",ImgRandom);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var ImgRandom2 = "images/dice"+ randomNumber2+ ".png";
document.querySelector(".img2").setAttribute("src",ImgRandom2)

if(ImgRandom>ImgRandom2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
}
else if(ImgRandom==ImgRandom2){
    document.querySelector("h1").innerHTML = "Draw 😒";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
