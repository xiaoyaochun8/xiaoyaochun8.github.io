window.onload = (event) => {
    // console.log(event);
    var img=document.getElementById("pic1");
    main(img);
}
var currColor = 'red';
var bgColor = 'white';
var lineWidth = 5;
function setColor(color){
    currColor = color
}
function setBgColor(color){
    if (!confirm("你确定要清除画布并更换背景颜色吗？")) {
        return;
    }
    bgColor = color
    main();
}
function setLineWidth(width){
    lineWidth = width
}
function popPicSelector(){
    var popPicSelector = document.querySelector(".popPicSelector");
    popPicSelector.style.display = 'flex';
}
function selectPic(obj){
    console.log(obj.id)
    var popPicSelector = document.querySelector(".popPicSelector");
    popPicSelector.style.display = 'none';
    var img=document.getElementById(obj.id);
    main(img);
}
function clean(){
    if (!confirm("你确定要清除吗？")) {
        return;
    }
    bgColor = 'white';
    main();
}
function main(img) {
    const canvas = document.getElementById("canvas");
    // 设置画布的宽高
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight-5;
    
    const ctx = canvas.getContext("2d");
    
    if (!ctx) return;
    
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if(img){
        ctx.drawImage(img,0,100);
    }
    
    let isDrawing = false;
    let x = 0;
    let y = 0;
    let startX = 0;
    let startY = 0;
    let x2 = 0;
    let y2 = 0;
    
    canvas.addEventListener("touchstart", (event) => {
        //console.log(event);
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        isDrawing = true;
        return false;
    });
    
    canvas.addEventListener("touchmove", (event) => {
        //console.log('touchmove', event);
        if (isDrawing) {
            drawLine(ctx, currColor, lineWidth, startX, startY, event.touches[0].clientX, event.touches[0].clientY);
            x2 = event.touches[0].clientX;
            y2 = event.touches[0].clientY;
            //isDrawing = false;
            startX = x2;
            startY = y2;
        }
        return false;
    });
    
    canvas.addEventListener("touchend", (event) => {
        //console.log('touchend', event);
        if (isDrawing) {
            console.log(startX, startY, x2, y2);
            x = 0;
            y = 0;
            isDrawing = false;
        }
        return false;
    });
}

function drawLine(context, strokeStyle, lineWidth, x0, y0, x1, y1) {
    context.beginPath();
    context.strokeStyle = strokeStyle;
    context.lineWidth = lineWidth;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.stroke();
}


/*
1. 计算相交两点***
2. 绘制两个新的图形
3. 新图形分离
4. 旋转、拖拽


*/