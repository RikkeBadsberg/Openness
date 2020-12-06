var position;

function setupEntity(x,y,width){
  var position = createVector(x,y,width);
}

function draw(){
  ellipse(position.x, position.y, position.z, position.z);
}
