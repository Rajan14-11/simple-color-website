const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.menu')
let navlogo = document.querySelector('#logo')
const mobilemenu = ()=>{
    console.log('entered in function')
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
}

menu.addEventListener('click', mobilemenu)

const highlightmenu = ()=>{
    const elem =document.querySelector('.highlight')
    const homemenu = document.querySelector('#home-page')
    const aboutmenu = document.querySelector('#about-page')
    const services = document.querySelector('#services-page')
    let scrollpos = window.scrollY;
    if(window.innerWidth > 960 && scrollpos < 600){
        homemenu.classList.add('highlight');
        aboutmenu.classList.remove('highlight')
        return
    }
    else if(window.innerWidth > 960 && scrollpos < 1680){
        aboutmenu.classList.add('highlight');
        homemenu.classList.remove('highlight')
        services.classList.remove('highlight')
        return
    }
    else if(window.innerWidth > 960 && scrollpos < 2820){
        services.classList.add('highlight')
        aboutmenu.classList.remove('highlight')
        return
    }
    else if(elem && window.innerWidth <960 && scrollpos < 600 || elem){
        elem.classList.remove('highlight')
    }
    
}
window.addEventListener('scroll',highlightmenu)
window.addEventListener('click',highlightmenu)

const hidemobilemenu = ()=>{
    const menubars = document.querySelector('.is-active')
    if(window.innerWidth <=760 && menubars){
        menu.classList.toggle('is-active')
        menulinks.classList.remove('active')
    }
}
menulinks.addEventListener('click',hidemobilemenu)
navlogo.addEventListener('click',hidemobilemenu)