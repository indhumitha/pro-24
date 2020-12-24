class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,this.width,this.height,options)
    World.add(world, this.body)
    };

    display(){
     var poss=this.body.position
     var angle=this.body.angle
     if(keyIsDown(LEFT_ARROW)&& angle>-1.5708){
       angle=angle-0.05
       Matter.Body.setAngle(tanker.body, angle)
     }

     if(keyIsDown(RIGHT_ARROW)&& angle<0){
      angle=angle+0.05
      Matter.Body.setAngle(tanker.body, angle)
    }
     launcherX=poss.x+((this.height+100)*cos(angle))
     launcherY=poss.y-((this.height-100)*sin(angle))
     if(keyIsDown(DOWN_ARROW)){
       Matter.Body.setPosition(canonBall.body,{x:launcherX-100,y:launcherY+100})
     }

     if(keyIsDown(DOWN_ARROW)&&angle>=-0.050){
      Matter.Body.setPosition(canonBall.body,{x:launcherX-100,y:launcherY})
    }

    if(keyIsDown(DOWN_ARROW)&&angle<=-1.40){
      Matter.Body.setPosition(canonBall.body,{x:launcherX,y:launcherY+100})
    }
    push()
    translate(poss.x,poss.y)
    rotate(angle)
    rect(0,0,this.width,this.height)
    pop()
    arc(70,height-65,90,100,PI,TWO_PI)
    rect(20,height-65,100,20)
    rect(20,height-45,100,20)
    };
}
