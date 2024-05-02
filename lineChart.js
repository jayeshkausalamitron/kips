$(document).ready(function() {
    let ctx = document.getElementById('lineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Example Line Chart',
          data: [65, 59, 80, 81, 56, 55],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          fill: true
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });

  $(document).ready(function() {
    let ctx = document.getElementById('secondlineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct' , 'Nov', 'Dec'],
        datasets: [{
          label: 'Example Line Chart',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50, 31, 22],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 2,
          fill: true
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });