var slideImg_2 = document.getElementById("slideimg2");
var images_2 = new Array(
    "./images/career4.jpg",
     "./images/career2.jpg",
     "./images/career5.jpg",
     "./images/career1.webp"
);
var lens = images_2.length;
var j = 0;

function animation2(){
    if(j > lens-1){
        j = 0;
    }
    slideImg_2.src = images_2[j];
    j++;
    setTimeout( "animation2()", 5000);
}
document.querySelector("body").addEventListener("load", animation2());




