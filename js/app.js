let menuIcon = document.querySelector('.icon-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador =  true;


// console.log(menu);
console.log(menuIcon);

menuIcon.addEventListener('click',()=> {
    
    // document.querySelector('#menu').classList.toggle('fa-times');

    if (activador) {
        menu.style.left ="-100%";
        menu.style.transition ="0.5s";
        
        activador = false;   
    }else{
        menu.style.left ="0";
        menu.style.transition ="0.5s";
        
        activador = true; 
    }
});

