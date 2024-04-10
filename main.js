const dpi = document.querySelector('#dpi')
const lowSens = document.querySelector('#low-sens')
const highSens = document.querySelector('#high-sens')
const confirm = document.querySelector('#confirm')
const credits = document.querySelector('#credits')
let average, dpiLowSens, dpiHighSens

const date = new Date()
const year = date.getFullYear()

credits.innerHTML = `Made by <a href="https://github.com/rafaelmarquesrm">Rafael Marques</a> - ${year}`
confirm.addEventListener('click', () => {
    average = 280 / dpi.value
    dpiLowSens = average / 2
    dpiHighSens = average * 2
    lowSens.innerHTML = dpiLowSens.toFixed(2) + '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>'
    highSens.innerHTML = dpiHighSens.toFixed(2) + '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>'
})

lowSens.addEventListener('click', () => {
    dpiLowSens = average
    average = (dpiHighSens + dpiLowSens) / 2
    lowSens.innerHTML = dpiLowSens.toFixed(2) + '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>'
})

highSens.addEventListener('click', () => {
    dpiHighSens = average
    average = (dpiHighSens + dpiLowSens) / 2
    highSens.innerHTML = dpiHighSens.toFixed(2) + '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>'
})