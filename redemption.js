// redemption.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('redemption-form');
    const schemeSelect = document.getElementById('scheme');

    // Function to fetch and populate scheme options
    function fetchSchemes() {
        // Replace with actual backend endpoint to fetch schemes
        // Example API endpoint: '/api/schemes'
        const mockSchemes = [
            { id: 'scheme1', name: 'Scheme 1' },
            { id: 'scheme2', name: 'Scheme 2' },
            { id: 'scheme3', name: 'Scheme 3' }
        ];

        mockSchemes.forEach(scheme => {
            const option = document.createElement('option');
            option.value = scheme.id;
            option.textContent = scheme.name;
            schemeSelect.appendChild(option);
        });
    }

    // Fetch schemes when the page loads
    fetchSchemes();

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Validate the form inputs
        const folioNumber = document.getElementById('folio-number').value.trim();
        const scheme = schemeSelect.value.trim();
        const units = parseFloat(document.getElementById('units').value);
        const amount = parseFloat(document.getElementById('amount').value);

        if (!folioNumber || !scheme || isNaN(units) || isNaN(amount) || units <= 0 || amount <= 0) {
            alert('Please fill out all fields correctly.');
            return;
        }

        // Simulate submitting the form data (replace with actual AJAX request if needed)
        const redemptionData = {
            folioNumber,
            scheme,
            units,
            amount
        };

        console.log('Redemption Data:', redemptionData);
        alert('Redemption request submitted successfully!'); // Replace with actual success message handling
        form.reset(); // Reset the form after submission
    });
});
