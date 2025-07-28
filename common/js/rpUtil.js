const rpUtil = {
    log: function(msg){
        console.log(msg);
    },
    gotoPage: function(pageName){
        location.href = pageName + '.html';
    },
    gotoPageWithPath: function(pageName){
        location.href = 'https://xiaoyaochun8.github.io/'+pageName+'.html';
        //location.href = '../'+pageName+'.html';
    },
    gotoPageWithUrl: function(url){
        location.href = url;
    },
    dom: function(domSelector){
        return document.querySelector(domSelector);
    }
}