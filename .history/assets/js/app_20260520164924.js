const header = document.querySelector('header')
const mainScreen = document.querySelector('main-screen')

document.addEventListener('resize', () => {
    let headerHeight = header.offsetHeight
    mainScreen.style.marginTop = headerHeight
})