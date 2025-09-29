var btn = document.createElement("BUTTON");
var t = document.createTextNode("«返回");
btn.appendChild(t);
btn.style.fontSize = '1em';
btn.style.position = 'absolute';
btn.style.left = '0';
btn.style.top = '0';
btn.style.zIndex = '999';
btn.addEventListener('click',function(e){
    navigation.back();
})
document.body.appendChild(btn);