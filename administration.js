document.addEventListener('DOMContentLoaded', () => {
    // Existing navigation code...

    // Manage Users functionality
    document.getElementById('user-management-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const role = document.getElementById('role').value;
        // Add user to the list (for demonstration purposes)
        const userList = document.getElementById('user-list').querySelector('ul');
        userList.innerHTML += `<li>${username} (${email}) - ${role}</li>`;
    });

    // Manage Schemes functionality
    document.getElementById('scheme-management-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const schemeName = document.getElementById('scheme-name').value;
        const schemeDescription = document.getElementById('scheme-description').value;
        // Add scheme to the list (for demonstration purposes)
        const schemeList = document.getElementById('scheme-list').querySelector('ul');
        schemeList.innerHTML += `<li>${schemeName} - ${schemeDescription}</li>`;
    });

    // Generate Reports functionality
    document.getElementById('report-generation-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const reportType = document.getElementById('report-type').value;
        const reportPeriod = document.getElementById('report-period').value;
        // Generate report (for demonstration purposes)
        const reportResults = document.getElementById('report-results');
        reportResults.innerHTML = `<p>Report: ${reportType}, Period: ${reportPeriod}</p>`;
    });
});
