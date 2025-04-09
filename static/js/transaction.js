function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Function to close the popup window
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Function to download the transaction table as a CSV file
function downloadCSV() {
// Get all table rows except the header
const rows = document.querySelectorAll('table tbody tr');

// Prepare CSV content
let csvContent = 'Date,Category,Amount,Payment Method,Notes\n';

// Iterate over table rows and append data to CSV content
rows.forEach(row => {
    const columns = row.querySelectorAll('td');
    const rowData = Array.from(columns).map(column => column.textContent.replace(/\n/g, '').replace('₹', '')); // Remove newline characters and INR symbol
    csvContent += rowData.join(',') + '\n';
});

// Create a Blob object containing the CSV content
const blob = new Blob([csvContent], { type: 'text/csv' });

// Create a temporary anchor element
const a = document.createElement('a');
a.href = window.URL.createObjectURL(blob);
a.download = 'transactions.csv';

// Append the anchor element to the document body and trigger a click event
document.body.appendChild(a);
a.click();

// Remove the anchor element from the document body
document.body.removeChild(a);
}