const menuButton=document.getElementById('menu-button');
const navLinks=document.getElementById('nav-links');
const yearSpan=document.getElementById('year');
const form=document.getElementById('contact-form');
const formMessage=document.getElementById('form-message');
const scrollBar=document.getElementById('scroll-progress');

menuButton.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
    menuButton.textContent=navLinks.classList.contains('open')?'✕':'☰';
});

yearSpan.textContent=new Date().getFullYear();

window.addEventListener('scroll',()=>{
    const scrolled=window.scrollY;
    const docHeight=document.documentElement.scrollHeight-window.innerHeight;
    scrollBar.style.width=(scrolled/docHeight)*100+'%';
});

form.addEventListener('submit',e=>{
    e.preventDefault();
    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const message=document.getElementById('message').value.trim();

    if(!name||!email||!message){
        formMessage.textContent='Please complete all fields.';
        formMessage.style.color='#ff6b6b';
        return;
    }
    formMessage.textContent='Message sent successfully!';
    formMessage.style.color='#38b000';
    form.reset();
});
