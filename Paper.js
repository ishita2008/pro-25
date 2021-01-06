class Paper extends Base{
    constructor(x,y,r){

        var options = {
            isStatic:false,
            density:1.5,
            friction: 1.5,
            restitution:0.5
          };



      

        
    super(x,y,r)
    this.image=loadImage("paper.png",options)

  
   

    
       
    
    
}

    
    display(){
        var pos=this.body.position
        super.display();
        
    }
   
}

	
	
	
