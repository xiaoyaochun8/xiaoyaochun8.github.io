function initDividRule(e, cnt, isShowNum){
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
                var drLineBox = document.querySelector(e+' .drBox .drLineBox');
                drLineBox.innerHTML = html;
                if(isShowNum){
                    var drNumBox = document.querySelector(e+' .drBox .drNumBox');
                    drNumBox.innerHTML = html2;
                }
            }
            function initHtml(e){
var html = `
<div class="drBox">
    <div class="drLineBox">
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
    height: 30px;
    border: solid 1px blue;
}
.drLineBox {
    border-bottom: solid 1px gray;
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
<style>`;
document.querySelector('body').insertAdjacentHTML('beforeend', style);
            }
            
export {
    initDividRule
}