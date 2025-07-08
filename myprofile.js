// myprofile.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('settings-form');
    const saveButton = document.querySelector('.save-button');
    const addressInput = document.getElementById('address');
    const panInput = document.getElementById('pan');

    // Simulated initial data
    const profileData = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        contact: '+1234567890',
        address: '123 Main St, Anytown, AN 12345',
        pan: 'ABCDE1234F',
        kycStatus: 'Verified'
    };

    // Initialize form fields with data
    document.getElementById('name').textContent = profileData.name;
    document.getElementById('email').textContent = profileData.email;
    document.getElementById('contact').textContent = profileData.contact;
    addressInput.value = profileData.address;
    panInput.value = profileData.pan;
    document.getElementById('kyc-status').textContent = profileData.kycStatus;

    // Save changes event listener
    saveButton.addEventListener('click', () => {
        // Simulate sending updated data to server
        const updatedData = {
            address: addressInput.value,
            pan: panInput.value
        };

        // Here you can add an actual AJAX request to update the data on the server
        // For demonstration purposes, log the updated data to console
        console.log('Updated Data:', updatedData);

        // Optionally, show a success message or update UI upon successful save
        alert('Changes saved successfully!');
    });
});
