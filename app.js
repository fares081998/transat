const img=document.querySelector(".img1");
const img2=document.querySelector(".img2");
const img3=document.querySelector(".img3");
const txt1=document.querySelector(".main_infos");
const service=document.querySelectorAll(".service");
console.log(img);
window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    if(window.scrollY>500 && window.scrollY<1060){
        img.classList.add("animate");
        txt1.classList.add("animate");
        img2.style.top="65%"
        img3.style.top="8%"

    }
    if(window.scrollY<82 || window.scrollY>1060){
        img.classList.remove("animate");
        txt1.classList.remove("animate");
        img2.style.top="100%"
        img3.style.top="-50%"

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