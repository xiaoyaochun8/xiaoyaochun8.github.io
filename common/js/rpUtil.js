const rpUtil = {
    log: function(msg){
        console.log(msg);
    },
    gotoPage: function(pageName){
        location.href = pageName + '.html';
    },
    gotoPageWithPath: function(pageName){
        location.href = 'https://xiaoyaochun8.github.io/'+pageName+'.html';
    },
    dom: function(domSelector){
        return document.querySelector(domSelector);
    }
}