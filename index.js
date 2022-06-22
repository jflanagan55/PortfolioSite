const triggerHamburger = document.querySelector('#trigger-hamburger');
triggerHamburger.addEventListener('click', ()=>{
    let x = document.querySelector('.navbar-menu')
    x.classList.toggle('is-active')
    

})
const submitBtn = document.querySelector('#submit-button');
submitBtn.addEventListener('click', ()=>{
    alert("thanks for reaching out 🤝🏽")
})