var ball ;
var database;
var position;



function setup(){
    database=firebase.database();
    console.log(database)
    createCanvas(400,400)

ball = createSprite(200,200,100,100);
ball.shapeColor="blue";
var ballpos=database.ref("ball/position");
ballpos.on("value",repos)
}



function draw(){
background("yellow");
if(position!==undefined){
if(keyDown(LEFT_ARROW)){
writepos(-2,0)
}
if(keyDown(RIGHT_ARROW)){
writepos(2,0)
}
if(keyDown(UP_ARROW)){
writepos(0,-2)
}
if(keyDown(DOWN_ARROW)){
writepos(0,2)
}
drawSprites();
}
}
function writepos(x,y){
database.ref("ball/position").set({
   'x':position.x+x,
    'y':position.y+y
})


}
function repos(data){
position=data.val();
console.log(position)
ball.x=position.x
ball.y=position.y
}