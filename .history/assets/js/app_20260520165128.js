document.addEventListener('DomContentLoaded', () => {

    const header = document.querySelector('header')
    const mainScreen = document.querySelector('.main-screen')

    window.addEventListener('resize', () => {
        let headerHeight = header.offsetHeight
        mainScreen.style.marginTop = headerHeight + 'px'
    })
})