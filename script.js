const gumb = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav-x");

gumb.addEventListener("click", () =>{
    if(gumb.classList.contains("fa-bars")){
        gumb.classList.toggle("fa-x");
        nav.classList.toggle("nav-toggle");
    }
})