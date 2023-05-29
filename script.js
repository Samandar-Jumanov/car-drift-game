window.addEventListener('load', ()=>{


const canvas = document.getElementById('myCanvas')
canvas.width = 500 ;

const ctx = canvas.getContext('2d')
const road = new Road(canvas.width/2 , canvas.width)
const car = new Car(100 , 90 , 70 , 50 )

animate()

function animate(){
    car.update()
    canvas.height = 500;
    car.draw(ctx)
    road.draw(ctx)

     // Check if the Car is outside the canvas
     if (!car.isInsideCanvas()) {
        console.log('Car is outside the canvas');
      }
  
    requestAnimationFrame(animate)
}







})