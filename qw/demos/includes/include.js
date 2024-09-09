var url = "includes/header.html"
$.get(url, function(result){
  $("head").append(result);
})