document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header')
    const mainScreen = document.querySelector('.main-screen')

    const updateMargin = () => {
        let headerHeight = header.offsetHeight
        mainScreen.style.marginTop = headerHeight + 'px';
    }

    updateMargin()

    window.addEventListener('resize', updateMargin)
})