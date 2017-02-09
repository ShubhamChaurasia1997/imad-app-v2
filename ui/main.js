console.log('Loaded!');
var counter=0;
var button= document.getElementById("counter");
button.onclick=function(){
    counter=counter+1;
    var span = getElementById("count");
    span.innerHTML=counter.toString();
}