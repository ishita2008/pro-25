class Base {
    constructor(x, y,width,height) {
      var options = {
        'isStatic':false,
        'density':1.5,
        'friction': 1.5,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("base.png");
      World.add(world, this.body);
    };
    display(){
      
     
  
      push();
      translate(this.body.position.x, this.body.position.y);

      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height)
      pop();
    };
  };
 