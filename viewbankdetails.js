// viewbankdetails.js

document.addEventListener('DOMContentLoaded', () => {
    const accountList = document.querySelector('.account-list');
    const nomineeInfo = document.querySelector('.nominee-info');
    const addBankButton = document.getElementById('add-bank');
    const editNomineeButton = document.getElementById('edit-nominee');

    // Function to fetch and populate bank accounts
    function fetchBankAccounts() {
        // Replace with actual backend endpoint to fetch bank accounts
        // Example API endpoint: '/api/bank-accounts'
        const mockAccounts = [
            { id: '1', bankName: 'Bank of America', accountNumber: 'XXXX-XXXX-1234', type: 'Savings' },
            { id: '2', bankName: 'Chase Bank', accountNumber: 'XXXX-XXXX-5678', type: 'Checking' }
        ];

        mockAccounts.forEach(account => {
            const accountItem = document.createElement('div');
            accountItem.classList.add('account-item');
            accountItem.innerHTML = `
                <strong>${account.bankName}</strong><br>
                Account Number: ${account.accountNumber}<br>
                Type: ${account.type}
            `;
            accountList.appendChild(accountItem);
        });
    }

    // Function to fetch and populate nominee details
    function fetchNomineeDetails() {
        // Replace with actual backend endpoint to fetch nominee details
        // Example API endpoint: '/api/nominee-details'
        const mockNominee = {
            name: 'Jane Doe',
            relationship: 'Spouse',
            contact: '+1234567890'
        };

        const nomineeInfoHTML = `
            <strong>Name:</strong> ${mockNominee.name}<br>
            <strong>Relationship:</strong> ${mockNominee.relationship}<br>
            <strong>Contact:</strong> ${mockNominee.contact}
        `;
        nomineeInfo.innerHTML = nomineeInfoHTML;
    }

    // Fetch bank accounts and nominee details when the page loads
    fetchBankAccounts();
    fetchNomineeDetails();

    // Event listener for Add Bank Account button (replace with actual logic)
    addBankButton.addEventListener('click', () => {
        alert('Add Bank Account functionality will be implemented.');
        // Implement logic to add a bank account (e.g., show a form or modal)
    });

    // Event listener for Edit Nominee button (replace with actual logic)
    editNomineeButton.addEventListener('click', () => {
        alert('Edit Nominee functionality will be implemented.');
        // Implement logic to edit nominee details (e.g., show a form or modal)
    });
});
