

const show_menu = document.getElementById('show-responsive-menu');
const responsive_menu = document.getElementById('resppo_menu');
let remove = document.getElementById('remove');



show_menu.onclick = () => {
    console.log("hello");

    responsive_menu.style.display = "block";
    responsive_menu.classList.remove('respo-menu-animation-out');
    responsive_menu.classList.add('respo-menu-animation')
}
remove.onclick = () => {
    responsive_menu.classList.remove('respo-menu-animation');
    responsive_menu.classList.add('respo-menu-animation-out');
    responsive_menu.style.display = "none";

}


const about_link = document.getElementById('about_us-mobile');


const remove_responsive_menu = () => {
    responsive_menu.classList.remove('respo-menu-animation');
    responsive_menu.classList.add('respo-menu-animation-out');
    responsive_menu.style.display = "none";
}


const scrollToNoTarifs = () => {
    document.getElementById("prices").scrollIntoView({ behavior: "smooth" });
}

const find_us = () => {
    window.open("https://maps.app.goo.gl/7E7Lupxa3sQ1cavM6", "_blank")
}



var splide = new Splide('#main-carousel', {
    pagination: false,
    arrows: true


});

splide.mount();

// POPUP

const button_remove_popup = document.getElementById('remove_popup');
const popup_div = document.getElementById('popup');

button_remove_popup.onclick = () => {

    popup_div.style.display = "none"

}


const showPopup = () => {
    popup_div.style.display = "block"
}




// SEND EMAIL

const send_email_button = document.getElementById('send_email_button');

const sendEmail = (e) => {
    e.preventDefault();
    const form = document.getElementById("contact-form");
    let isLoading = true;
    send_email_button.innerHTML = "Sending email...";
    emailjs.sendForm("service_2er4y9j", "template_6h1bw03", form)
        .then(
            function (response) {
                console.log("Email sent successfully!", response);
                console.log('isLoading before :',isLoading);
                
                isLoading = false;
                console.log('isLoading after :',isLoading);

                send_email_button.innerHTML = "send";
                form.reset();
                popup_div.style.display = "none"
                alert("Message sent successfully!");

            },
            function (error) {
                console.error(" Email sending failed:", error);
                alert("Failed to send message.");
                isLoading = false;
                form.reset();
                popup_div.style.display = "none"
            }
        );
    // popup_div.style.display = "none"
}


