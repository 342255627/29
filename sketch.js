ground = new Ground();
stand = new Ground();


//1
block1 = new Box(330,235,30,40);
block1 = new Box(360,235,30,40);
block1 = new Box(390,235,30,40);
block1 = new Box(420,235,30,40);
block1 = new Box(450,235,30,40);
//2
block1 = new Box(360,195,30,40);
block1 = new Box(390,195,30,40);
block1 = new Box(420,195,30,40);
//top
block1 = new Box(390,155,30,40);

polygon=Bodies.circle(50,200,20);
World.add(world,polygon);


slingShot=new Slingshot(this.polygon,{x:100,y:200});
imageMode(CENTER)
image(polygon_img ,polygon.position.x,polygon.position.y,40,40)