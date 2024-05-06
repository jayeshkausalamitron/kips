$(document).ready(function() {
    let ctx = document.getElementById('lineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct' , 'Nov', 'Dec'],
        datasets: [{
          label: 'New Part Quote percentage monthly',
          data: [65, 59, 80, 81, 56, 55, 77, 88, 66, 33, 65, 59],
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
    let ctx = document.getElementById('secondlineChart');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct' , 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales Revenue',
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


  $(document).ready(function() {
    let ctx = document.getElementById('grossProfitlineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct' , 'Nov', 'Dec'],
        datasets: [{
          label: 'Gross Profit',
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

  $(document).ready(function() {
    let ctx = document.getElementById('netProfitlineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct' , 'Nov', 'Dec'],
        datasets: [{
          label: 'Net Profit',
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

  $(document).ready(function() {
    let ctx = document.getElementById('newPartQuotelineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct' , 'Nov', 'Dec'],
        datasets: [{
          label: 'New Part Quotes',
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

  $(document).ready(function() {
    let ctx = document.getElementById('existingQuoteCompletedlineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct' , 'Nov', 'Dec'],
        datasets: [{
          label: 'Exisiting Quotes Completed',
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

  $(document).ready(function() {
    let ctx = document.getElementById('dailyNumberOfPurchaseOrderslineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct' , 'Nov', 'Dec'],
        datasets: [{
          label: 'Daily number of purchase orders',
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


  $(document).ready(function() {
    let ctx = document.getElementById('newCustomerQuotelineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct' , 'Nov', 'Dec'],
        datasets: [{
          label: 'New Customers Quoted',
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

  $(document).ready(function() {
    let ctx = document.getElementById('posdailylineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct' , 'Nov', 'Dec'],
        datasets: [{
          label: 'Number of placed POS Daily',
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

  $(document).ready(function() {
    let ctx = document.getElementById('posWeeklylineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct' , 'Nov', 'Dec'],
        datasets: [{
          label: 'Number of placed POS Daily',
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

  $(document).ready(function() {
    let ctx = document.getElementById('posmonthlylineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct' , 'Nov', 'Dec'],
        datasets: [{
          label: 'Number of placed POS Monthly',
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

  $(document).ready(function() {
    let ctx = document.getElementById('posyearlylineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Number of placed POS Yearly',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('onTimeDeliveryPerCharlineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'On-time delivery percentage',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('onTimeDeliveryPerCharlineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'On-time delivery percentage',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('avgSlineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Average lead-time for release',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('laborCostPerPanellineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Labor cost per panel Hours Value in $',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('laborCostPerPanellineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Labor cost per panel Hours Value in $',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('laborHourPerPanellineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Labor hours per panel Hours Value in $',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('overTimePerlineChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Overtime percentage',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('panelPerMonthCountValue').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Panels per month Number count Value in $',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('squrePerMonthCountValue').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Panel sq/ft per month',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('totalAvgPanelPriceChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Total average Panel price Value in $',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('avgCycleTimebyLayerChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Average Panel price USA',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('InternalScrapPerChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Internal Scrap percent',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('customerRMADollarsValueChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Customer RMA dollars Value in $',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('noOfPanelShippedChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Number of Panels shipped per day.',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('noOfPanelShippedPerMonthChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Number of Panels shipped per month.',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('nmanpowerHoursValueChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Manpower hours Value in $',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('anpowerWeeksValueChart').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Manpower Weeks Value in $',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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
    let ctx = document.getElementById('manpowerMonthValue').getContext('2d');
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000'],
        datasets: [{
          label: 'Manpower Month Value in $',
          data: [16, 12, 23, 54, 45, 56, 7, 28, 19, 50,],
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