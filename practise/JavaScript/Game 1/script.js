const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const canvas_width = canvas.width = 600;
const canvas_height = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'picture.png';
let x = 0;

function animate(){
    ctx.clearRect(0,0,canvas_width,canvas_hegiht);
    ctx.fillRect(x,50,100,100);
    x++;
    requestAnimationFrame(animate);
};
animate();