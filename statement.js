document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

function setupEventListeners() {
    const printButton = document.querySelector('.print-button button');
    const exportButton = document.querySelector('.export-button button');
    
    if (printButton) {
        printButton.addEventListener('click', printStatement);
    }

    if (exportButton) {
        exportButton.addEventListener('click', exportToPDF);
    }
}

function printStatement() {
    window.print();
}

function exportToPDF() {
    const statementElement = document.querySelector('.account-statement');
    const opt = {
        margin: 1,
        filename: 'account-statement.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(statementElement).save();
}
