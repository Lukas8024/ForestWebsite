const navMobile = document.querySelector('.nav-mobile__items')
const burgerBtn = document.querySelector('.nav-button')
const iconBtn = document.querySelector('#icon')

const handleNav = () => {
	navMobile.classList.toggle('nav-mobile__items--active')
	changeIcon()
}

const changeIcon = () => {
	if (navMobile.classList.contains('nav-mobile__items--active')) {
		iconBtn.classList.remove('fa-solid', 'fa-bars')
		iconBtn.classList.add('fa-solid', 'fa-xmark')
	} else {
		iconBtn.classList.remove('fa-solid', 'fa-xmark')
		iconBtn.classList.add('fa-solid', 'fa-bars')
	}
}

burgerBtn.addEventListener('click', handleNav)
