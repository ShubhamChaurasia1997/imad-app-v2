var button= document.getElementById('counter');
var counter=0;
button.onclick=function(){
    counter=counter+1;
    var span = document.getElementById('count');
    span.innerHTML=counter.toString();
};

var nameInput= document.getElementById('name');
var name= nameInput.value;
var submit=document.getElementById('submit_btn')
submit.onclick = function(){
    
}