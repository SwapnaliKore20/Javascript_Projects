
var index=0;

function changeColors(){
   var colors= ["red","Blue","Orange","Yellow","Green","Purpal"];

document.getElementsByTagName("body")[0].style.background=colors[index++]

if(index>colors.length-1)
{
    index=0;
}
}