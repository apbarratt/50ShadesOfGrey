var elements = '';
for(var i=1; i<=50; i++) {
    var num = i * 3 + 55;
    elements += '<div style="height:2vh;background:rgb('+num+','+num+','+num+')">'+i+'</div>';
}
document.body.innerHTML = elements;
