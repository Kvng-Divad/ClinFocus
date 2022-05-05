var slideImg = document.getElementById("slideimg");
var images = new Array(
    "./images/back1.jpg",
     "./images/back2.jpg",
     "./images/back3.jpg",
     "./images/back4.jpg"
);
var len = images.length;
var i =0;



function animation(){
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout( "animation()", 5000);
}
document.querySelector("body").addEventListener("load", animation());


const nav =document.querySelector('.navlinks'),
      navList = nav.querySelectorAll('li'),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
           a.addEventListener("click", function() 
           {
               for(let j=0; j<totalNavList; j++){
                navList[j].querySelector("a").classList.remove("active"); 
               }
              this.classList.add("active");
              showSection(this);
              drop_remove(this)
          })
}



function showSection(element)
{
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
    
}

const navToggler = document.querySelector(".toggler");
const navBar = document.querySelector(".aside");
navToggler.addEventListener ('click', () => {
navBar.classList.toggle('open');
drop_remove(this)
});

window.addEventListener("resize", () => {
        navBar.classList.remove("open")
})

var a_parent = document.querySelectorAll(".a_parent");
a_parent.forEach(function(a_parent_item){
    a_parent_item.addEventListener("mouseover", function(){
        a_parent.forEach(function(a_parent_item){
            a_parent_item.classList.remove("drop");
        })
        a_parent_item.classList.toggle("drop");
    });
})


var nav_bar = document.querySelector("nav");

nav_bar.addEventListener("mouseleave", drop_remove);





const aside = document.querySelector('.aside'),
      toggle = aside.querySelectorAll('.toggle-link'),
      totalToggle = toggle.length,
      allSections = document.querySelectorAll(".section"),
      totalSections = allSections.length;
      for(let i=0; i<totalToggle; i++)
      {
          const A = toggle[i].querySelector("a");
           A.addEventListener("click", function() 
           {
               for(let j=0; j<totalToggle; j++){
                toggle[j].querySelector("a").classList.remove("active"); 
               }
              this.classList.add("active");
              showSections(this);
              close(this);
              drop_remove(this)
          })
}
 aside.addEventListener("mouseleave", close);

function showSections(element)
{
    for(let i=0; i<totalSections; i++){
        allSections[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element)
{
   for(let i=0; i<totalNavList; i++){
       navList[i].querySelector("a").classList.remove("active");
       const target = element.getAttribute("href").split("#")[1];
       if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
       {
        navList[i].querySelector("a").classList.add("active");
       }
   }
}

function updateToggleNav(element)
{
   for(let i=0; i<totalToggle; i++){
       toggle[i].querySelector("a").classList.remove("active");
       const target = element.getAttribute("href").split("#")[1];
       if(target === toggle[i].querySelector("a").getAttribute("href").split("#")[1])
       {
        toggle[i].querySelector("a").classList.add("active");
       }
   }
}

function drop_remove(){
    a_parent.forEach(function(a_parent_item){
        a_parent_item.classList.remove("drop");
    })
}


function close(){
    aside.classList.remove("open")
}




document.querySelector(".mission").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.getElementById("btn-about").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})

document.querySelector(".btn-audit").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})

document.querySelector(".btn-programming").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})


document.querySelector(".btn-management").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
var contact = document.querySelectorAll(".contact-btn");

contact.forEach(function(show_sections) 
{
    show_sections.addEventListener("click", function(){
        showSection(this);
        updateNav(this);
        showSections(this);
        updateToggleNav(this);
    })
})

var request = document.querySelectorAll(".btn-contact");

request.forEach(function(show_sections) 
{
    show_sections.addEventListener("click", function(){
        showSection(this);
        updateNav(this);
        showSections(this);
        updateToggleNav(this);
    })
})


var footer_link = document.querySelectorAll(".footerlink");

footer_link.forEach(function(show_sections) 
{
    show_sections.addEventListener("click", function(){
        showSection(this);
        updateNav(this);
        showSections(this);
        updateToggleNav(this);
    })
})


var menu_s = document.querySelectorAll(".menu");

menu_s.forEach(function(show_sections) 
{
    show_sections.addEventListener("click", function(){
        showSection(this);
        updateNav(this);
        showSections(this);
        updateToggleNav(this);
        drop_remove(this);
    })
})


var back = document.querySelectorAll(".back");

back.forEach(function(show_sections) 
{
    show_sections.addEventListener("click", function(){
        showSection(this);
        updateNav(this);
        showSections(this);
        updateToggleNav(this);
    })
})






