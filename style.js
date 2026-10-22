
const themeBtn = document.getElementById("themeBtn")
const navbar = document.querySelector(".navbar")
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        navbar.classList.remove("navbar-dark", "bg-dark");
        navbar.classList.add("navbar-light", "bg-light");

        themeBtn.textContent = '☾ Dark Mode'
    } else {
        navbar.classList.remove("navbar-light", "bg-light");
        navbar.classList.add("navbar-dark", "bg-dark");

        themeBtn.textContent = "☼ Light mode"
    }
});


const typing = document.getElementById('typing');
const word = [
    "FRONTEND DEVELOPER",
    "UI DEVELOPER",
    "CREATIVE CODER"];

let index = 0;
let letter = 0;
let deleting = false;

function typeEffect() {
    let words = word[index];
    if (deleting) {
        letter--;
    } else {
        letter++;
    }
    typing.textContent = words.substring(0, letter);

    if (!deleting && letter === words.length) {
        deleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (deleting && letter === 0) {
        deleting = false;
        index = (index + 1) % word.length;
    }

    setTimeout(typeEffect, deleting ? 40 : 80)
}

typeEffect();

// greeting
const hour = new Date().getHours();

let greetings;
if (hour < 12) {
    greetings = "Good Morning!"
} else if (hour < 17) {
    greetings = "Good Afternoon!"
} else {
    greetings = "Good Evening!"
}
document.getElementById("greeting").innerHTML = greetings;



const contactOptions = document.querySelectorAll('input[name="contact"]');
const contactInput = document.getElementById('contactInput');

contactOptions.forEach(option => {
    option.addEventListener('change', function () {
        if (this.value === 'phone') {
            contactInput.type = 'tel';
            contactInput.placeholder = 'Enter your phone number';
        } else {
            contactInput.type = 'email';
            contactInput.placeholder = 'Enter your email address';
        }
    });
});


(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()


    
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.classList.add("was-validated");
        return;
    }

    const businessName = "URIEL";
    const whatsappNumber = "09035066048";
    const businessEmail = "mosakuuriel@gmail.com";

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();

    const customerName = `${ firstName } ${ lastName } `;

    alert(
        `Thank you, ${ customerName }, for choosing ${ businessName }!\n\n` +
        `We appreciate your interest in our business.\n\n` +
        `Click OK to choose how you would like to contact us.`
    );

    const choice = confirm(
        "Would you like to contact us through WhatsApp?\n\n" +
        "Click OK for WhatsApp or Cancel for Email."
    );

    const message = encodeURIComponent(
        `Hello ${ businessName }, my name is ${ customerName }.` +
        `I have submitted your website form and would like to make an enquiry.`
    );

    if (choice) {
        window.location.href =
            `https://wa.me/${whatsappNumber}?text=${message}`;
    } else {
    window.location.href =
        `mailto:${businessEmail}?subject=${encodeURIComponent(
            "Business Enquiry"
        )}&body=${message}`;
}
});
