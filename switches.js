// switches.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('switches-form');
    const currentSchemeSelect = document.getElementById('current-scheme');
    const targetSchemeSelect = document.getElementById('target-scheme');

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
            const option1 = document.createElement('option');
            option1.value = scheme.id;
            option1.textContent = scheme.name;
            currentSchemeSelect.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = scheme.id;
            option2.textContent = scheme.name;
            targetSchemeSelect.appendChild(option2);
        });
    }

    // Fetch schemes when the page loads
    fetchSchemes();

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Validate the form inputs
        const folioNumber = document.getElementById('folio-number').value.trim();
        const currentScheme = currentSchemeSelect.value.trim();
        const targetScheme = targetSchemeSelect.value.trim();
        const units = parseFloat(document.getElementById('units').value);
        
        if (!folioNumber || !currentScheme || !targetScheme || isNaN(units) || units <= 0) {
            alert('Please fill out all fields correctly.');
            return;
        }

        // Simulate submitting the form data (replace with actual AJAX request if needed)
        const switchesData = {
            folioNumber,
            currentScheme,
            targetScheme,
            units
        };

        console.log('Switches Data:', switchesData);
        alert('Switch request submitted successfully!'); // Replace with actual success message handling
        form.reset(); // Reset the form after submission
    });
});
