
let mobileNav = document.querySelector("#mobile-nav-trigger");
let nav = document.querySelector("nav");
mobileNav.addEventListener("click", function(){
    if(mobileNav.classList.contains("open")){
        mobileNav.classList.remove("open")
        nav.classList.remove("open")
    }else{
        mobileNav.classList.add("open")
        nav.classList.add("open") 
    }
})