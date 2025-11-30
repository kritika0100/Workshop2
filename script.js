const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('nav ul');
const yearSpan = document.getElementById('year');
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

yearSpan.textContent = new Date().getFullYear();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "Please complete all fields.";
        formMessage.style.color = "#ff4444";
        return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "#00c851";
    form.reset();
});
