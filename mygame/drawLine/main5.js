window.onload = (event) => {
    // console.log(event);
    main();
}

function main() {
    const canvas = document.getElementById("canvas");
    // 设置画布的宽高
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight-5;
    
    const ctx = canvas.getContext("2d");
    
    if (!ctx) return;
    
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
    });
    
    canvas.addEventListener("touchmove", (event) => {
        //console.log('touchmove', event);
        if (isDrawing) {
            drawLine(ctx, "green", 3, startX, startY, event.touches[0].clientX, event.touches[0].clientY);
            x2 = event.touches[0].clientX;
            y2 = event.touches[0].clientY;
            //isDrawing = false;
            startX = x2;
            startY = y2;
        }
    });
    
    canvas.addEventListener("touchend", (event) => {
        //console.log('touchend', event);
        if (isDrawing) {
            console.log(startX, startY, x2, y2);
            x = 0;
            y = 0;
            isDrawing = false;
        }
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