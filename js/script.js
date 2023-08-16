



const [navLinks] = document.getElementsByClassName("nav-links");

const [navBtn] = document.getElementsByClassName("nav-btn");


navBtn.addEventListener("click",function(e){
    navLinks.classList.toggle("show-links");
})