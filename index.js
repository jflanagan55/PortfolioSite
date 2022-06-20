const triggerHamburger = document.querySelector('#trigger-hamburger');
triggerHamburger.addEventListener('click', ()=>{
    let x = document.querySelector('.navbar-menu')
    x.classList.toggle('is-active')
    

})