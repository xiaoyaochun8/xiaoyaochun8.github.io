window.onload = (event) => {
    // console.log(event);
    main();
}

function main() {
    const canvas = document.getElementById("canvas");
    // 设置画布的宽高
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const ctx = canvas.getContext("2d");
    
    if (!ctx) return;
    
    let x = 0;
    let y = 0;
    
    canvas.addEventListener("touchstart", (event) => {
        //console.log(event);
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
        //console.log(x,y);
        drawSprite(ctx, x, y);
    });
    
    canvas.addEventListener("touchmove", (event) => {
        //console.log('touchmove', event);
    });
    
    canvas.addEventListener("touchend", (event) => {
        //console.log('touchend', event);
    });
}
function drawSprite(ctx, x, y){
    var size = Math.random()*70+30;
    var width = size;
    var height = size;
    var posX = x - width/2;
    var posY = y - height/2;
    ctx.beginPath();
    ctx.rect(posX, posY, width, height);
    //ctx.stroke();
    ctx.fillStyle = `rgb(
        ${Math.floor(Math.random()*255)},
        ${Math.floor(Math.random()*255)},
        ${Math.floor(Math.random()*255)}
        )`;
    ctx.fill();
}