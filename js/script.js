

var navToggler = document.querySelector(".toggler");
var navBar = document.querySelector(".aside");
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


function drop_remove(){
    a_parent.forEach(function(a_parent_item){
        a_parent_item.classList.remove("drop");
    })
}


var nav_bar = document.querySelector("nav");

nav_bar.addEventListener("mouseleave", drop_remove);


var aside = document.querySelector('.aside')
function close(){
    aside.classList.remove("open");
};
var asideToggler = document.querySelector(".aside-toggler")
asideToggler.addEventListener('click', close);

/* scroll-Header */
function scrollHeader(){
    const header = document.querySelector(".navigation")
    if(this.scrollY >= 50) {
         header.classList.add("scroll-header");
    }
    else{
        header.classList.remove("scroll-header"); 
    }
    }
    window.addEventListener("scroll", scrollHeader);

/*--------scroll- Reveal-------*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
    //reset:true
})

sr.reveal('.container, .footer, .section-title')
sr.reveal('.article-container, .section-image,.services-title,.container-title,.section-subhead',{delay:600})
sr.reveal('.available ,.career-article,.over-lay-content',{delay:700})
sr.reveal('.footer-item, .section-item, .section-info-item', {interval:100})
sr.reveal('.info-item, .mission-article, .card, .box-container', {interval:100})
sr.reveal('.info2-image', {origin: 'right'})
sr.reveal('.info2-article', {origin: 'left'})
