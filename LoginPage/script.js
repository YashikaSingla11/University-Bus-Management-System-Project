// // Get the form
// const form = document.getElementById('login-form');

// // Get the input fields
// const roleId = document.getElementById('role_id');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

// // Add an event listener to the form submission
// form.addEventListener('submit', function(event) {
//     // Clear any existing error messages
//     const errorMessageDiv = document.querySelector('.error-message');
//     errorMessageDiv.textContent = '';

//     // Check if any of the input fields are empty
//     let hasError = false;

//     if (roleId.value === '') {
//         errorMessageDiv.textContent += 'Please select a role. ';
//         hasError = true;
//     }

//     if (email.value.trim() === '') {
//         errorMessageDiv.textContent += 'Please enter your email. ';
//         hasError = true;
//     }

//     if (password.value.trim() === '') {
//         errorMessageDiv.textContent += 'Please enter your password. ';
//         hasError = true;
//     }

//     // Prevent the form from submitting if there are errors
//     if (hasError) {
//         event.preventDefault(); // Prevent navigation to the next page
//     } else {
//         // If no errors, proceed to the next page
//         window.location.href = '/HomePage/index1.html'; // Redirect to the homepage
//     }
// });

// Get the form
const form = document.getElementById('login-form');

// Get the input fields
const roleId = document.getElementById('role_id');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Get the error message div
const errorMessageDiv = document.querySelector('.error-message');

// Add an event listener to the form submission
form.addEventListener('submit', function(event) {
    // Clear any existing error messages
    errorMessageDiv.textContent = '';

    // Check if any of the input fields are empty
    let hasError = false;

    if (roleId.value === '') {
        errorMessageDiv.textContent += 'Please select a role. ';
        hasError = true;
    }

    if (email.value.trim() === '') {
        errorMessageDiv.textContent += 'Please enter your email. ';
        hasError = true;
    }

    if (password.value.trim() === '') {
        errorMessageDiv.textContent += 'Please enter your password. ';
        hasError = true;
    }

    // Prevent the form from submitting if there are errors
    if (hasError) {
        event.preventDefault(); // Prevent navigation to the next page
    } else {
        // If no errors, proceed to the next page
        window.location.href = '/HomePage/index1.html'; // Redirect to the homepage
    }
});