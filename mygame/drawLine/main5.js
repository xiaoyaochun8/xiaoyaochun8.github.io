window.onload = (event) => {
    // console.log(event);
    var img=document.getElementById("pic1");
    main(img, 'p0');
}
var currColor = 'red';
var bgColor = 'white';
var lineWidth = 5;
var aryPicInfo = {
    p0:[474,397],
    p1:[640,600],
    p2:[700,416],
    p3:[700,408],
    p4:[900,600],
    p5:[474,379],
    p6:[474,379],
    p7:[474,379],
    p8:[474,379],
    p9:[474,355],
    p10:[474,379],
    p11:[474,379],
    p12:[474,379],
    p13:[474,355],
    p14:[474,476],
    p15:[474,355],
    p16:[474,355],
    p17:[474,379],
    p18:[474,272],
    p19:[474,336],
    p20:[474,287],
    p21:[474,293],
    p22:[474,379],
    p23:[474,379],
    p24:[474,379],
    p25:[474,379],
    p26:[474,379],
    p27:[474,379],
    p28:[474,379],
    p29:[474,379],
    p30:[474,379],
    p31:[474,379],
    p32:[474,379],
    p33:[474,387],
    p34:[474,379],
    p35:[474,341],
    p36:[474,474],
    p37:[474,494],
    p38:[474,355],
    p39:[700,500],
    p40:[641,472],
    p41:[800,450],
    p42:[640,61],
    p43:[620,429],
    p44:[1500,1000],
    p45:[900,600],
};
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
    main(img, obj.id);
}
function clean(){
    if (!confirm("你确定要清除吗？")) {
        return;
    }
    bgColor = 'white';
    main();
}
function main(img, id) {
    const canvas = document.getElementById("canvas");
    // 设置画布的宽高
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight-5;
    
    const ctx = canvas.getContext("2d");
    
    if (!ctx) return;
    
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if(img){
        var picWidth = aryPicInfo[id][0];
        var picHeight = aryPicInfo[id][1];
        var tmpHeight = canvas.width / (picWidth / picHeight);
        ctx.drawImage(img, 0, 100, canvas.width, tmpHeight);
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