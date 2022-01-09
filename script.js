const container = document.querySelector('.container'); 
const circle = document.querySelector('.circle-container'); 
const nav = document.querySelector('nav'); 
const open = document.getElementById('open'); 
const close = document.getElementById('close'); 

close.addEventListener('click', () => {
    circle.classList.remove('show-nav'); 
    container.classList.remove('show-nav'); 
    nav.classList.remove('show-nav'); 
} )
open.addEventListener('click', () => {
    circle.classList.add('show-nav'); 
    container.classList.add('show-nav'); 
    nav.classList.add('show-nav'); 
} )