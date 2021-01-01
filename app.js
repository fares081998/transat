const img=document.querySelector(".img1");
const img2=document.querySelector(".img2");
const img3=document.querySelector(".img3");
const txt1=document.querySelector(".main_infos");
const btn1=document.querySelector(".btn");
const nav=document.querySelector("nav");
const service=document.querySelectorAll(".service");
const btns=document.querySelectorAll("li");
const sections=document.querySelectorAll("section");

heights=sections[0].offsetHeight-nav.offsetHeight-1;

window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    if(window.scrollY<140){
        document.querySelector("nav").classList.remove("shrink");
    }
    if(window.scrollY>140){
        document.querySelector("nav").classList.add("shrink");
    }
    if(window.scrollY>heights){
        document.querySelector("nav").classList.add("fix");
        sections[0].style.paddingTop="100px";
    }
    if(window.scrollY<heights){
        document.querySelector("nav").classList.remove("fix");
        sections[0].style.paddingTop="0";

    }

    if(window.scrollY>heights && window.scrollY<2*heights){
        img.classList.add("animate");
        txt1.classList.add("animate");
        img2.style.top="65%"
        img3.style.top="8%"

    }
    if(window.scrollY<82 || window.scrollY>2*heights){
        img.classList.remove("animate");
        txt1.classList.remove("animate");
        img2.style.top="100%"
        img3.style.top="-50%"

    }
    if(window.scrollY>2*heights && window.scrollY< 3*heights){
        service[0].classList.add("animate2");
        service[1].classList.add("animate2");
    }
    if(window.scrollY<heights || window.scrollY>3*heights){
        service[0].classList.remove("animate2");
        service[1].classList.remove("animate2");
    }

   
})
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",()=>{
        let height=0;
        for(let j=0;j<i;j++){
            height+=sections[i].offsetHeight;
        }
        window.scrollTo(0,height-90);
       
    })
}
btn1.addEventListener("click",()=>{
    window.scrollTo(0,heights+5);
})