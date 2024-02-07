const toggle = document.getElementById('navdrop');
const nav = document.getElementById('nav');
const header = document.getElementById('header');

document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'navdrop' && e.target.id !== 'nav'){
        toggle.classList.remove('active');
        nav.classList.remove('active');
    } 
    }

toggle.onclick = function(){
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
}