// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(link => {
    
    link.addEventListener('click', function(e) {
        
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// Contact Form Message
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    contactForm.reset();

});