let icone=document.querySelector('.icone');
let nav=document.querySelector('.topbar .navbar');
let header=document.querySelector('.topbar');
let body=document.querySelector('body');
const gauche=document.querySelector('.gauche');
const droite=document.querySelector('.droite');
let close=`<i class="fas fa-times"></i>`;
let icone1=`<i class="fas fa-bars"></i>`;
const slide=document.querySelectorAll('.sec1');
const inscrireClose=document.querySelector('.form form span');
const inscrire=document.querySelector('.form');
const section1=document.querySelector('.section1');
const section2=document.querySelector('.section2');
const sigin=document.querySelector('.sigin');
const nbreSlide=slide.length;
let count=0;


function nextSlide(){
    slide[count].classList.remove('start');

    if(count < nbreSlide -1){
        count++;
    }else{
        count=0;
    }
    slide[count].classList.add('start');
    // setTimeout(nextSlide,3000);
}

// nextSlide();
droite.addEventListener('click',nextSlide);

function precSlide(){
     slide[count].classList.remove('start');

    if(count > 0){
        count--;
    }else{
        count= nbreSlide-1;
    }
    slide[count].classList.add('start');
}
gauche.addEventListener('click',precSlide);


// Menu responsive
icone.addEventListener('click',()=>{
    nav.classList.toggle('aff');
     if(nav.classList.contains('aff')){
   icone.innerHTML=close;
}else{
    icone.innerHTML=icone1;
}
});

inscrireClose.addEventListener('click',()=>{
    //  inscrire.classList.toggle('hide');
     inscrire.style.display="none";
     section1.style.filter = "initial";
     section2.style.filter = "initial";
     body.style.overflow="initial";

})
sigin.addEventListener('click',()=>{
    inscrire.style.display="flex";
    if(inscrire.style.display="flex"){
    section1.style.filter = "blur(4px)";
    section2.style.filter = "blur(4px)";
    body.style.overflow="hidden";
    }
   
})

// function display(param1,param2,param3,param4){
//     param1.style.display="flex";
//     if(param1.style.display="flex"){
//     param2.style.filter = "blur(4px)";
//     param3.style.filter = "blur(4px)";
//     param4.style.overflow="hidden";
//     return display;
// }
// display(inscrire,section1,section2,body);
// sigin.addEventListener('click',display);
// function scroll(){
//     let sc=window.scrollY;
//     if(sc>390){
//     header.classList.add("bg")
//     // header.style.position='fixed';
//     }else{
//         header.classList.remove("bg");
//         header.style.position='absolute';
//     }
// }

// function largeur(){
//     let lg=screen.width;
//     if(lg<=768){
//         header.style.position='fixed';
//     }
//     else{
//         if(header.classList.contains("bg")){
//             header.style.position='fixed';
//         }else{
//             header.style.position='absolute';
//         }
//     }
// }

// window.addEventListener('scroll',scroll);
// window.addEventListener('scroll',largeur);
// console.log("je scrole:"+ window.scrollY);
