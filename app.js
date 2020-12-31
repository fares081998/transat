const img=document.querySelector(".img1");
const txt1=document.querySelector(".main_infos");
const service=document.querySelectorAll(".service");
console.log(img);
window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    if(window.scrollY>500 && window.scrollY<1060){
        img.classList.add("animate");
        txt1.classList.add("animate");

    }
    if(window.scrollY<82 || window.scrollY>1060){
        img.classList.remove("animate");
        txt1.classList.remove("animate");

    }
    if(window.scrollY>963){
        service[0].classList.add("animate2");
        service[1].classList.add("animate2");
    }
    if(window.scrollY<644 || window.scrollY>1590){
        service[0].classList.remove("animate2");
        service[1].classList.remove("animate2");
    }

   
})