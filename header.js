const openBurgerMenu = document.querySelector('.solid_menu')
const burgerMenu = document.querySelector('.burger-menu')
const closeBurgerMenu = document.querySelector('.icon-close-box')

openBurgerMenu.addEventListener('click', () =>{
    burgerMenu.classList.add('is-open')
})
closeBurgerMenu.addEventListener('click', () => {
	burgerMenu.classList.remove('is-open')
})


