const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const roadPic = document.createElement('img');
roadPic.src = './images/road.png';

const carPic = document.createElement('img');
carPic.src = './images/car.png'


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

roadPic.onload = () => {
  ctx.drawImage(roadPic, 0, 0, 500, 700);
};

carPic.onload = () => {
  ctx.drawImage(carPic, 222, 600, 50, 70);
};


document.addEventListener("keydown", (event) => {
  switch(true){
   case (event.key === "ArrowLeft" && carPic.x > 0):
     console.log("arrowleft")
    carPic.x -= 30 // 
     break;
   case event.key === "ArrowRight" &&carPic.x < 750:
     console.log("arrowright");
    carPic.x += 30;
     break;
 }
});

// document.addEventListener("keyup", (event) => {
//  mypedrito.speedX = 0;
//  mypedrito.speedY = 0;
//  // this.y = 0;
// });


