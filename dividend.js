// dividend_option.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dividend-option-form');
    const schemeSelect = document.getElementById('scheme');

    // Simulated options loaded from backend
    const schemes = [
        { id: 'scheme1', name: 'Scheme 1' },
        { id: 'scheme2', name: 'Scheme 2' },
        { id: 'scheme3', name: 'Scheme 3' }
    ];

    // Populate scheme dropdown options
    schemes.forEach(scheme => {
        const option = document.createElement('option');
        option.value = scheme.id;
        option.textContent = scheme.name;
        schemeSelect.appendChild(option);
    });

    form.addEventListener('submit', event => {
        event.preventDefault();

        const folioNumber = document.getElementById('folio-number').value.trim();
        const scheme = schemeSelect.value;
        const dividendOption = document.getElementById('dividend-option').value;

        // Validate that all fields are filled
        if (!folioNumber || !scheme || !dividendOption) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate form submission to the backend
        setTimeout(() => {
            alert('Dividend option changed successfully!');
            form.reset();
        }, 1000);
    });
});
