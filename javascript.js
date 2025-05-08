//Get the button:
mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction(); };
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Add your code to handle form submission here (e.g., send data to the server)

    // Reset the form fields after submission
    document.getElementById('contact-form').reset();
});


window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.classList.add('fadeOut');

    // Hide the loader after a short delay
    setTimeout(function () {
        loader.style.display = 'none';
    }, 1000);
});