class Mouse{
  constructor(x,y){
    var options ={
      'desnity': 1.5,
      'friction':1.0,
      'restitution':0.5
    };
  this.Visiblity = 255;
  this.body= Bodies.rectangle(x,y,50,50,options);
  this.width=50;
  this.height=50;
  this.image=loadImage("sprites/jerry.png");
  World.add(world, this.body);
  };

  display(){
    if(this.body.speed < 3){
      var angle = this.body.angle;
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
  };
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }

  }






