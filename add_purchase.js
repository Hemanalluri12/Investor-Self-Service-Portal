document.addEventListener('DOMContentLoaded', () => {
    const purchaseForm = document.getElementById('additional-purchase-form');
    
    purchaseForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    });
});

function validateForm() {
    const folioNumber = document.getElementById('folio-number').value;
    const scheme = document.getElementById('scheme').value;
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.getElementById('payment-method').value;
    
    let isValid = true;
    
    if (!folioNumber) {
        alert('Folio Number is required.');
        isValid = false;
    }
    
    if (!scheme) {
        alert('Please select a scheme.');
        isValid = false;
    }
    
    if (!amount || amount <= 0) {
        alert('Please enter a valid investment amount.');
        isValid = false;
    }
    
    if (!paymentMethod) {
        alert('Please select a payment method.');
        isValid = false;
    }
    
    return isValid;
}

function submitForm() {
    const formData = new FormData(document.getElementById('additional-purchase-form'));
    const data = {
        folioNumber: formData.get('folio-number'),
        scheme: formData.get('scheme'),
        amount: formData.get('amount'),
        paymentMethod: formData.get('payment-method')
    };
    
    // Here you can add your form submission logic, such as sending the data to a server.
    console.log('Form submitted:', data);
    
    // Display a success message to the user.
    displaySuccessMessage();
}

function displaySuccessMessage() {
    const formContainer = document.querySelector('.purchase-form');
    formContainer.innerHTML = `
        <h2>Thank You!</h2>
        <p>Your additional purchase has been successfully submitted.</p>
        <p>Folio Number: ${document.getElementById('folio-number').value}</p>
        <p>Scheme: ${document.getElementById('scheme').value}</p>
        <p>Amount: $${document.getElementById('amount').value}</p>
        <p>Payment Method: ${document.getElementById('payment-method').value}</p>
    `;
}
