/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function() {
    let emailInput = document.getElementById('email');
    let form = document.querySelector('.newsletter form');
    let messageDiv = document.querySelector('.newsletter .message');
    

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let email = emailInput.value.trim();

        if (validateEmail(email)) {
            messageDiv.textContent = "Thank you! Your email address "+ email + " has been added to our mailing list!.";
            messageDiv.style.color = "green";
            emailInput.value = '';
        } else {
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "red";
        }
    });
});