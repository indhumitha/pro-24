// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var engine,world,tanker,canonBall,shoot,ground,ball1,ball2,ball3,launcherX,launcherY;
var angle=0
var flag="start"

function setup() {
    createCanvas(800,500)
    engine=Engine.create()
    world=engine.world
    ground=new Ground(width/2,height-10,width,30)
    tanker=new Tanker(75,height-110,60,30)
    ball1=new Ball(400,50,20)
    ball2=new Ball(500,100,20)
    ball3=new Ball(600,150,20)
    canonBall=new CanonBall(20,20)
    shoot=new ShootBall(canonBall.body,{x:70,y:height-220})
}

function draw() {
background(255)
Engine.update(engine)
ground.display()
ball1.display()
ball2.display()
ball3.display()
canonBall.display()
tanker.display()
shoot.display()

if(keyIsDown(UP_ARROW)){
    shoot.attach(canonBall.body)
}
}


function keyReleased() {
    if(keyCode===DOWN_ARROW){
        flag="launch"
        shoot.shot()
    }
}