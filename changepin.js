document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('change-pin-form');
    
    form.addEventListener('submit', event => {
        event.preventDefault();

        const oldPin = document.getElementById('old-pin').value.trim();
        const newPin = document.getElementById('new-pin').value.trim();
        const confirmPin = document.getElementById('confirm-pin').value.trim();

        // Validate that all fields are filled
        if (!oldPin || !newPin || !confirmPin) {
            alert('Please fill in all fields.');
            return;
        }

        // Validate that new PIN and confirm PIN match
        if (newPin !== confirmPin) {
            alert('New PIN and Confirm New PIN do not match.');
            return;
        }

        // Validate PIN strength (at least 6 characters, including numbers and letters)
        const pinRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
        if (!pinRegex.test(newPin)) {
            alert('New PIN must be at least 6 characters long and include both letters and numbers.');
            return;
        }

        // Simulate form submission to the backend
        setTimeout(() => {
            alert('PIN changed successfully!');
            form.reset();
        }, 1000);
    });
});
