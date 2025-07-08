document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the default way

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        alert('Registration successful!');
        // Here you can add the logic to send the form data to the server
    }
});
