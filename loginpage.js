document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const forgotPinLink = document.querySelector('.forgot-pin');
    
    // Form validation and login simulation
    loginForm.addEventListener('submit', event => {
        event.preventDefault();

        const folioNumber = document.getElementById('folio-number').value;
        const pin = document.getElementById('pin').value;

        if (folioNumber === '' || pin === '') {
            alert('Please fill in all fields.');
        } else {
            // Simulate login process
            setTimeout(() => {
                alert('Login successful!');
                window.location.href = 'homepage.html';
            }, 1000);
        }
    });

    // Forgot PIN modal
    
    forgotPinLink.addEventListener('click', event => {
        event.preventDefault();
        const email = prompt('Please enter your email to reset the PIN:');
        if (email) {
            // Simulate sending reset PIN email
            setTimeout(() => {
                alert('An email has been sent to ' + email + ' with instructions to reset your PIN.');
            }, 1000);
        }
    });
});
