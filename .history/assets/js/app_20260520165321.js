const { update } = require("three/examples/jsm/libs/tween.module.js")

document.addEventListener('DomContentLoaded', () => {

    const header = document.querySelector('header')
    const mainScreen = document.querySelector('.main-screen')

    const updateMargin = () => {
        let headerHeight = header.offsetHeight
        mainScreen.style.marginTop = headerHeight + 'px';
    }

    updateMargin()

    window.addEventListener('resize', updateMargin)
})