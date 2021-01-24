class Box  {
    constructor(x, y, width, height){
    var options= {
      restitution:0.8,density:1.2
      }
      this.body=Bodies.rectangle(x,y,width,height);
      this.x=x
      this.y=y
      this.width=width
      this.height=height
      World.add(world,this.body)
}
  display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
  }
  };