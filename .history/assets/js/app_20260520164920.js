const header = document.querySelector('header')
const mainScreen = document.getElementsByClassName('main-screen')

document.addEventListener('resize', () => {
    let headerHeight = header.offsetHeight
    mainScreen.style.marginTop = headerHeight
})