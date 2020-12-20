class Ground extends BaseClass{
    constructor(x,y,width,height) {
      super(x,y,width,height)
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
    
     this.image =loadImage("sprites/ground.png")
     World.add(world, this.body);
    }
  };
