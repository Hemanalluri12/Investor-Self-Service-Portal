// viewtransaction.js

document.addEventListener('DOMContentLoaded', () => {
    const schemeFilter = document.getElementById('scheme-filter');
    const startDate = document.getElementById('start-date');
    const endDate = document.getElementById('end-date');
    const applyFilterBtn = document.getElementById('apply-filter');
    const transactionsBody = document.getElementById('transactions-body');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageNumber = document.getElementById('page-number');

    let currentPage = 1;
    const transactionsPerPage = 10; // Adjust as needed

    // Function to fetch transactions based on filters and pagination
    function fetchTransactions() {
        const selectedScheme = schemeFilter.value;
        const start = startDate.value;
        const end = endDate.value;
        const url = `/api/transactions?scheme=${selectedScheme}&start=${start}&end=${end}&page=${currentPage}&limit=${transactionsPerPage}`;

        // Replace with actual backend API call to fetch transactions
        // Example: fetch(url)
        //           .then(response => response.json())
        //           .then(data => {
        //               // Process data and populate transactionsBody
        //           })
        //           .catch(error => console.error('Error fetching transactions:', error));

        // Mock data for demonstration
        const mockTransactions = [
            { date: '2024-06-25', scheme: 'Equity Fund', type: 'Redemption', amount: 1500, units: 25, status: 'Success' },
            { date: '2024-06-24', scheme: 'Balanced Fund', type: 'Investment', amount: 2000, units: 15, status: 'Pending' }
            // Add more transactions as needed
        ];

        // Clear existing rows
        transactionsBody.innerHTML = '';

        // Populate table rows with fetched transactions
        mockTransactions.forEach(transaction => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${transaction.date}</td>
                <td>${transaction.scheme}</td>
                <td>${transaction.type}</td>
                <td>${transaction.amount}</td>
                <td>${transaction.units}</td>
                <td>${transaction.status}</td>
            `;
            transactionsBody.appendChild(row);
        });

        // Update page number display
        pageNumber.textContent = currentPage;
    }

    // Initial fetch when page loads
    fetchTransactions();

    // Apply filter button click event
    applyFilterBtn.addEventListener('click', () => {
        currentPage = 1; // Reset to first page when applying filters
        fetchTransactions();
    });

    // Previous page button click event
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchTransactions();
        }
    });

    // Next page button click event
    nextPageBtn.addEventListener('click', () => {
        currentPage++;
        fetchTransactions();
    });
});
