

// Adopting Dark styling when header scrolling down
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark');
    }else{
        header.classList.remove('header--dark');
    }
});

//Transparenting home section when it's scrolling down
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', ()=> {
   home.style.opacity = 1 - window.scrollY/homeHeight;
});

//visibling arrow icon when it's far away from home section
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight / 2){
        arrowUp.style.opacity = 1;
    }else{
        arrowUp.style.opacity = 0;
    }
});
