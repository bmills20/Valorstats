/*var lastGameChart;

function weekChart() {
    if(lastGameChart){
        lastGameChart.destroy();
    }
    
    var ctx5 = document.getElementById('mylastGameChart').getContext('2d');
    
    
    var options = {
        type: 'line',
        data: {
            labels: ["10/11", "10/12", "10/13", "10/14", "10/15", "10/16", "10/17"],
            datasets: [{
                    label: '# of Headshots',
                    data: [12, 19, 3, 5, 2, 3, 15],
                    borderWidth: 1,
                    backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)']

                            },
                {
                    label: '# of Bodyshots',
                    data: [7, 11, 5, 8, 3, 7, 5],
                    borderWidth: 1,
                    backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                    borderColor: ['rgba(54, 162, 235, 1)']
                            }
                        ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        reverse: false
                    }
                            }]
            }
        }
    };
    lastGameChart = new Chart(ctx5, options);
}

function monthChart() {
    lastGameChart.destroy();
    var ctx5 = document.getElementById('mylastGameChart').getContext('2d');
    
    
    lastGameChart = new Chart(ctx5, options2);
    
}*/

$(document).ready(function () {
    var ctx5 = $('#lastGameChart').get(0);
    var gameChartData = {
        type: 'line',
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            datasets: [{
                    label: '# of Headshots',
                    data: [12, 19, 3, 5, 2, 3, 15, 12, 15, 13, 15, 12, 13, 11, 12, 19, 3, 5, 2, 3, 15, ],
                    borderWidth: 1,
                    backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)']

                            },
                {
                    label: '# of Bodyshots',
                    data: [7, 11, 5, 8, 3, 7, 5, 7, 11, 2, 3, 5, 12, 5, 17, 11, 5, 8, 3, 7, 15],
                    borderWidth: 1,
                    backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                    borderColor: ['rgba(54, 162, 235, 1)']
                            }
                        ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        reverse: false
                    }
                            }]
            }
        }
    };
    var myChart = new Chart(ctx5, gameChartData);
                            
    });
