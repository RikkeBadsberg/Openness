var entities = [];
var ent1;
function setup() {
  // put setup code here
  createCanvas(500, 500);
  //entities[0] = createVector(x,y, width);
  let c = color(230,204,0,100);
  entities[0] = new Entity(150,300,30,color(255,100,0,250)); //createVector(150, 300, 30);
  entities[1] = new Entity(150,300,100,color(255,204,0,50)); // createVector(150, 300, 100);
  entities[2] = new Entity(150,300,60,color(255,204,0,100)); //createVector(150, 300, 60);

  entities[3] = new Entity(100,90,80,color(0,204,0,100)); //createVector(100,90, 80);
  entities[4] = new Entity(400,450,70,color(50,0,250,100)); //createVector(400,450, 70);
  entities[5] = new Entity(400,50,60,color(0,50,0,100));//createVector(400,50, 60);

}


function draw() {
  // put drawing code here
  background(240);
  frameRate(10);


  for (var i = 0; i < entities.length; i++) {
    entities[i].display();
  }

  stroke(180);
  //Draw lines between
  line(entities[0].position.x+random(3), entities[0].position.y+random(3), entities[3].position.x+random(3), entities[3].position.y+random(3)) //between 0 and 1
  line(entities[0].position.x+random(3), entities[0].position.y+random(3), entities[4].position.x+random(3), entities[4].position.y+random(3)) //between 0 and 2
  line(entities[0].position.x+random(3), entities[0].position.y+random(3), entities[5].position.x+random(3), entities[5].position.y+random(3)) //between 0 and 3

  //classes in p5: https://happycoding.io/tutorials/p5js/creating-classes
  //https://p5js.org/examples/form-regular-polygon.html
  //https://p5js.org/examples/form-pie-chart.html 
}

class Entity{
  constructor(x,y,width, color){
    this.position = new p5.Vector(x,y);
    this.width = width;
    this.color = color;
    //console.log("created instance of ENTITY");
  }

  display(){
    //console.log("drawing");
    fill(this.color);
    noStroke();
    ellipse(this.position.x+random(3), this.position.y+random(3), this.width+random(3),this.width+random(3));
  }
}
