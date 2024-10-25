document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Check if the form is valid
        if (form.checkValidity()) {
            // If valid, redirect to the homepage
            window.location.href = '/HomePage/index1.html'; // Adjust the path as needed
        } else {
            // If not valid, show the default browser validation messages
            form.reportValidity();
        }
    });
});