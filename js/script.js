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
});


const dropDown = nav.querySelector(".drop-downmenu");
const menu = document.querySelector(".drop-down");

dropDown.addEventListener("mouseover", () =>
{
   menu.style.display = "block";
})
dropDown.addEventListener("click", () =>
{
   menu.style.display = "none";
})

 function none(){
    menu.style.display = "none";
}

function closes(){
        navBar.classList.remove("open");
}

function close(){
    console.log("close")
        navBar.classList.remove("open");
}

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
          })
}

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

document.querySelector(".btn-contact").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})

document.querySelector(".contact1").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})

document.querySelector(".request").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})

document.querySelector(".request1").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})

document.querySelector(".request2").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink2").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink3").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink4").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink5").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink6").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink7").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink8").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink9").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink10").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink11").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink12").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink13").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink14").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink15").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink16").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink17").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink18").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink19").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".footerlink20").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".menu").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".menu2").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".menu3").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".menu4").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".menu5").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".menu6").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".back").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".back2").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})
document.querySelector(".back3").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
    showSections(this);
    updateToggleNav(this);
})


