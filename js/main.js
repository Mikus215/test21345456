
let nav; // Navigation
let navBtn; // on/off navigation
let allNavItem; //all links in section nevigation
let mainClass; // main/ for change color for mobile bars
let bars; // bars mobile
let logo; // logo/ change to black mobile


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
    animationBounce();
}


const prepareDOMElements = () =>{
    nav=document.getElementById('nav');
    navBtn=document.getElementById('btn-nav');
    allNavItem=document.querySelectorAll('.nav__item');
    mainClass=document.getElementById('main');
    bars=document.getElementById('btn-nav');
    logo=document.getElementById('logo');
}

const prepareDOMEvents = () =>{
    navBtn.addEventListener('click', showNavigation);
    // Hide navlist mobile
    allNavItem.forEach(item=>{
        item.addEventListener('click', () =>{
            nav.classList.remove('nav-active');
        })
    });
    // add background nav list
    window.addEventListener('scroll', addBackground,{passive: true});
    window.addEventListener('scroll', handleObserver,{passive: true});
    newYear();
}


// show hide navlist
const showNavigation = () =>{
    nav.classList.toggle('nav-active');
}

//add shadow to navlist scroll

const  addBackground=()=>
{
    if(window.scrollY>=100 & window.innerWidth>=850)
    {
        nav.classList.add('shadow-nav');
    }
    else
    {
        nav.classList.remove('shadow-nav');
    }
}

// Change color logo and bars mobile

const handleObserver=()=>{
    const currentSection = window.scrollY;
    if(mainClass.classList.contains('white') && mainClass.offsetTop <= currentSection + 30){
        bars.classList.add('nav-black-bars');
        logo.classList.add('img-black');
        
    }else{
        bars.classList.remove('nav-black-bars');
        logo.classList.remove('img-black');
        
    }
}

//dynamic year
const newYear=()=>
{
    const footerYear=document.querySelector('.footer-year');
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}


// GASP

//Arrow bounce in forst page

const animationBounce = () => {
    let ltArrow=new TimelineMax({repeat: -1});
    ltArrow.to('.header-arrow',1,{y:60,ease: Bounce.easeOut})
    .to('.header-arrow',.5,{y:0});
}



document.addEventListener('DOMContentLoaded', main);

