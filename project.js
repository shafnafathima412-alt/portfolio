// -----------show menu---------
const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// ------remove menu mobile--------
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
} 
navLink.forEach(n => n.addEventListener('click', linkAction))

// ---------home type js--------
const typedHome = new Typed('#home-typed', {
    strings: ['UI/UX Designer', 'UI Developer'], 
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    cursorChar: '_',
})

// --------Add shadow header----------
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')   
}
window.addEventListener('scroll', shadowHeader)

// ----------Contact email----------
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_uxt121j','template_d1h5nyo','#contact-form','l9KspZohmqRfho3He')
    .then(() => {
        contactMessage.textContent = 'Message sent successfully ✅'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)

// ---------cursor effect---------
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

document.addEventListener("mousemove", (e)=>{

particles.push({
x: e.clientX,
y: e.clientY,
size: Math.random()*6+2,
life: 100
});

});

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,i)=>{

ctx.beginPath();

ctx.shadowBlur = 20;
ctx.shadowColor = "#00ffff";   // neon glow

ctx.fillStyle = "#00ffff";

ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

p.size *= 0.95;
p.life--;

if(p.life <=0){
particles.splice(i,1);
}

});

requestAnimationFrame(animate);
}

animate();

// ----------show scrollup-------
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// ---------scroll selection active link---------
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }      
    })
}
window.addEventListener('scroll', scrollActive)

// ----------scroll reveal animation-------
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    // reset: true,
})

sr.reveal(`.home_content, .resume_content:nth-child(1), .footer_container`)
sr.reveal(`.home_data, .resume_content:nth-child(2)`, {delay: 300, origin: 'bottom'})

sr.reveal(`.about_content, .contact_content`, {origin: 'bottom'})
sr.reveal(`.about_image, .contact_form`, {delay: '300'})

sr.reveal(`.projects_card`, {interval: '100'})

// ---------magnetic button---------
const buttons = document.querySelectorAll("button, .button");

buttons.forEach(button => {
  button.addEventListener("mousemove", (e) => {

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0px,0px)";
  });
});