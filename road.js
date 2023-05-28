class Road {
    constructor( x, width , laneCount ){
        this.x = x;
        this.width = width;
        this.laneCount = laneCount

        this.left =this.x - this.width/2 
        this.right = this.x + this.width/2

        const infinity = 1000000;
        this.top = -infinity
        this.bottom = infinity
    }

    draw(ctx){

        

       
        ctx.lineWidth = 5
        ctx.strokeStyle = "white"
        ctx.beginPath()
        ctx.moveTo(this.left, this.top)
        ctx.lineTo(this.right, this.bottom )
        ctx.stroke()


        

    }
}