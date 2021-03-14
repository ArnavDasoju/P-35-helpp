var HotAirBalloon
var Background

function preload(){
HotAirBalloonImg=loadImage("images/HotAirBallon-04.png")
BackgroundImg=loadImage("images/HotAirBallon-01.png")


}

function setup() {
  createCanvas(1000,500);
  
  HotAirBalloon = createSprite(100,350);
  HotAirBalloon.addImage(HotAirBalloonImg)
  HotAirBalloon.scale = 0.5




}

function draw() {
  background(BackgroundImg);  
  if(keyDown(UP_ARROW)){
    HotAirBalloon.y = HotAirBalloon.y-2  
    }
    
    if(keyDown(DOWN_ARROW)){
    HotAirBalloon.y = HotAirBalloon.y+2  
    }



  drawSprites();
}

function writePosition(x,y){
  database.ref('balloon/position').set(
      {
    'x': position.x + x ,
    'y': position.y + y
  })
}
//reading the data from the DB
function readPosition(data){
    position = data.val();
   
    HotAirBalloon.x = position.x;
    HotAirBalloon.y = position.y;
  }
  
  function showError(){
    console.log("Error in writing to the database");
  }