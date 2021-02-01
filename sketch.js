let bird ;
function setup() {
    createCanvas(450, 600);
    // var r = random(255);
    // var g = random(255);
    // var b = random(255);
    // background(r, g, b);
    bird = new Bird;
}
function draw() {
    background(125, 214, 247);
    bird.update();
    bird.show();

}
function keyPressed(){
    if(key==' '){
        bird.up();
    }
}
function mouseClicked(){
    bird.up();
}