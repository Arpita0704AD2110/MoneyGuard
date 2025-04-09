document.addEventListener("DOMContentLoaded", function () {
    // Fetch Daily Spending Data
    fetch('/daily_spending')
        .then(response => response.json())
        .then(data => {
            const dailyCtx = document.getElementById('dailySpendingChart').getContext('2d');
            new Chart(dailyCtx, {
                type: 'bar',
                data: {
                    labels: [data.date],
                    datasets: [{
                        label: 'Daily Spending',
                        data: [data.total_spent],
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching daily spending:', error));

    // Fetch Monthly Spending Data
    fetch('/monthly_spending')
        .then(response => response.json())
        .then(data => {
            const monthlyCtx = document.getElementById('monthlySpendingChart').getContext('2d');
            new Chart(monthlyCtx, {
                type: 'line',
                data: {
                    labels: [data.month],
                    datasets: [{
                        label: 'Monthly Spending',
                        data: [data.total_spent],
                        backgroundColor: 'rgba(54, 162, 235, 0.5)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching monthly spending:', error));
});
