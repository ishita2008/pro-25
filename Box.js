class Box extends Base{
    constructor(x,y){

        super(x,y)
        this.image=loadImage("dustbingreen.png")


    }     
    display(){
        var pos = this.body.position
        super.display();
    }
}
