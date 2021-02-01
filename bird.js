class Bird {
    constructor() {
        this.x = 200;
        this.y = height / 2;
        this.r = 25;
        this.gravity = 0.3;
        this.velocity = 0;
    }
    show() {
        fill(252, 132, 109);
        ellipse(this.x, this.y, this.r * 2);
    }
    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y > height - this.r) {
            this.y = height - this.r;
            this.velocity = 0;
        }
        if(this.y<10){
            this.y=this.r;
            this.velocity=0;
        }
    }
    up() {
        this.velocity -= 15;
    }
}