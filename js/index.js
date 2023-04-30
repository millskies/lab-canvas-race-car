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

// roadPic.onload = () => {
//   ctx.drawImage(carPic, 0, 0, 50, 70);
// };


