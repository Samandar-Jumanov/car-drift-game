window.addEventListener('load', ()=>{


const canvas = document.getElementById('myCanvas')
canvas.width = 500 ; 

const ctx = canvas.getContext('2d')
const road = new Road(canvas.width/2 , canvas.width)
const car = new Car(100 , 90 , 70 , 50 )

animate()

function animate(){
    car.update()
    canvas.height = window.innerHeight
    car.draw(ctx)



    road.draw(ctx)
    requestAnimationFrame(animate)
}


if (canvas.left + canvas.width < 0 || canvas.left > window.innerWidth ||
    canvas.top + canvas.height < 0 || canvas.top > window.innerHeight) {
 
}





})