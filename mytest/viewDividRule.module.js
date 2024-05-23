var DividRule = {}
DividRule.inArray = function(str, ary){
    for(var i in ary){
        if(str == ary[i]){
            return true;
        }
    }
    return false;
}
DividRule.init = function (e, cnt, isShow, emptySegmentAry, segWPer){
                initHtml(e);
                initStyle();
                var html = '';
                var extClass = '';
                for(var i=0;i<=cnt;i++){
                    extClass = '';
                    if(i==0 || i==cnt || i==cnt/2){
                        extClass = 'drLineLong';
                    }
                    html += '<div class="drLine '+extClass+'"></div>';
                }
                var html2 = '';
                for(var i=0;i<=cnt;i++){
                    extClass = '';
                    html2 += '<div class="drNum">'+(i)+'</div>';
                }
                var html3 = '';
                var segWidthPer = segWPer ? segWPer : 9;
                for(var i=0;i<=cnt;i++){
                    extClass = '';
                    if(this.inArray(i, emptySegmentAry)){
                        extClass = 'empty';
                    }
                    html3 += '<div class="drLineDot '+extClass+'" style="width:'+segWidthPer+'%"></div>';
                }
                if(isShow[0]==1){
                    var drLineBox = document.querySelector(e+' .drBox .drLineBox');
                    drLineBox.innerHTML = html;
                }
                if(isShow[1]==1){
                    var drNumBox = document.querySelector(e+' .drBox .drNumBox');
                    drNumBox.innerHTML = html2;
                }
                if(isShow[2]==1){
                    var drLineDotBox = document.querySelector(e+' .drBox .drLineDotBox');
                    drLineDotBox.innerHTML = html3;
                }
            }
            function initHtml(e){
var html = `
<div class="drBox">
    <div class="drLineBox">
    </div>
    <div class="drLineDotBox">
    </div>
    <div class="drNumBox">
    </div>
</div>`;
document.querySelector(e).insertAdjacentHTML('afterbegin', html);
            }
            function initStyle(){
                if(document.querySelector('#drBoxStyle')){
                    return;
                }
var style = `
<style id="drBoxStyle">
.drBox {
    width: 100%;
    border: solid 0px blue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.drLineBox {
    border-bottom: solid 0px gray;
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}
.drLine {
    border: solid 0px red;
    background: gray;
    width: 1px;
    height: 3px;
}
.drLineLong {
    width: 3px;
    height: 5px;
    background: gray;
}
.drNumBox {
    border-bottom: solid 0px red;
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}
.drNum {
    border: solid 0px red;
    color: gray;
    width: 0.5rem;
    font-size: 0.5rem;
    text-align: center;
}
.drLineDotBox {
    border-bottom: solid 0px red;
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}
.drLineDot {
    border: solid 1px #4cd137;
    border-radius:8px;
    background: #4cd137;
    width: 9%;
    height: 0.2rem;
}
.empty {
    background: white;
    border: solid 1px #4cd137;
}
<style>`;
document.querySelector('body').insertAdjacentHTML('beforeend', style);
            }
            
export {
    DividRule
}