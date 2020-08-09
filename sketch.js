var ball;
var database
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    database.ref("ball/position").on("value",readposition)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}
function readposition(data){
   console.log(data.val().x)
   
   ball.x=data.val().x
   ball.y=data.val().y
 }
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ball/position").set({
x:ball.x+x,
y:ball.y+y
    
    })
}
