class Rope{
constructor(bodyA,bodyB,offsetX, offsetY)
{
    this.offsetX = offsetX
    this.offsetY = offsetY
var options = {
    bodyA : body1,
    bodyB : body2,
    pointB : {x:this.offsetX, y:this.offsetY}

}
this.rope = Constraint.create(options)
World.add(world,this.rope)

}
display()
{
    var bodyA = this.rope.bodyA.position;
    var bodyB = this.rope.bodyB.position;
    strokeWeight(2);
    var Anchor1X=pointA.x
    var Anchor1Y=pointA.y
    var Anchor2X=pointB.x+this.offsetX
    var Anchor2Y=pointB.y+this.offsetY
    rope1 = new Rope(bobObject1.body,roofObject.body, -bobDiameter*2,0)
    // rope2 = new Rope(bobObject2.body,roofObject.body, -bobDiameter*2,0)
    // rope3 = new Rope(bobObject3.body,roofObject.body, -bobDiameter*2,0)
    // rope4 = new Rope(bobObject4.body,roofObject.body, -bobDiameter*2,0)
    // rope5 = new Rope(bobObject5.body,roofObject.body, -bobDiameter*2,0)

    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}

}