const burgerBtn = document.querySelector('.nav-button')
const navMobile = document.querySelector('.nav-mobile__items')

const handleNav = ()=>{
    navMobile.classList.toggle('nav-mobile__items--active')
}

burgerBtn.addEventListener('click', handleNav)