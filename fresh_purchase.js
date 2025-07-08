document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('fresh-purchase-form');
    const schemeSelect = document.getElementById('scheme');

    // Simulate loading scheme options from the backend
    const schemes = [
        { id: 1, name: 'Equity Fund' },
        { id: 2, name: 'Debt Fund' },
        { id: 3, name: 'Balanced Fund' }
    ];

    // Populate the scheme select element
    schemes.forEach(scheme => {
        const option = document.createElement('option');
        option.value = scheme.id;
        option.textContent = scheme.name;
        schemeSelect.appendChild(option);
    });

    // Form validation and submission handling
    form.addEventListener('submit', event => {
        event.preventDefault();

        const investorName = document.getElementById('investor-name').value.trim();
        const folioNumber = document.getElementById('folio-number').value.trim();
        const scheme = schemeSelect.value;
        const amount = document.getElementById('amount').value.trim();
        const paymentMethod = document.getElementById('payment-method').value;

        if (!investorName || !folioNumber || !scheme || !amount || !paymentMethod) {
            alert('Please fill in all fields.');
            return;
        }

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid investment amount.');
            return;
        }

        // Simulate form submission to the backend
        setTimeout(() => {
            alert('Purchase submitted successfully!');
            form.reset();
        }, 1000);
    });
});
