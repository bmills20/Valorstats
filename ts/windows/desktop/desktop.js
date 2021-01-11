var chart3;

function weekChart() {
    if(chart3){
        chart3.destroy();
    }
    
    var ctx = document.getElementById('myChart3').getContext('2d');
    
    
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
    chart3 = new Chart(ctx, options);
}

function monthChart() {
    chart3.destroy();
    var ctx = document.getElementById('myChart3').getContext('2d');
    
    var options2 = {
        type: 'line',
        data: {
            labels: ["9/24", "9/25", "9/26", "9/27", "9/28", "9/29", "9/30", "10/1", "10/2", "10/3", "10/4", "10/5", "10/6", "10/7", "10/8", "10/9", "10/10", "10/11", "10/12", "10/13", "test"],
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
            scales: {
                yAxes: [{
                    ticks: {
                        reverse: false
                    }
                            }]
            }
        }
    };
    chart3 = new Chart(ctx, options2);
    
}

function addData(chart, idx) {
    chart.data.labels.push(
        "9/24", "9/25", "9/26", "9/27", "9/28", "9/29", "9/30", "10/1", "10/2"
    );
    chart.data.datasets[idx].data.push(
        12, 19, 3, 5, 2, 3, 15, 12, 15, 13, 15, 12, 13, 11, 12, 19, 3
    );
    chart.update();
}

/*--Make sure jQuery is loaded before referencing with $ by delaying display until document is ready
Must be at bottom to allow functions to be loaded first */
$(document).ready(function () {
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        responsive: true,
        maintainAspectRatio: false,
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
                label: '# of Games Played',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

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

    var ctx2 = document.getElementById('myChart3').getContext('2d');
    chart3 = new Chart(ctx2, options);

    
    //radar chart
    var ctx3 = $('#radardiv');

    var radarData = {
      labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
      datasets: [{
        label: "Student A",
        backgroundColor: "rgba(200,0,0,0.2)",
        data: [65, 75, 70, 80, 60, 80]
      }, {
        label: "Student B",
        backgroundColor: "rgba(0,0,200,0.2)",
        data: [54, 65, 60, 70, 70, 75]
      }]
    }
    var radarChart = new Chart(ctx3, {
        type: 'radar',
        data: radarData
    })
    
    //autofocus first button
    $('#buttonautofocus').addClass('focus');

    //create variable for last focused button so current graphs aren't recreated
    var lastFocus;

    //keep focus when clicked elsewhere and apply proper focus when clicked
    $('button').click(function () {

        $('button').removeClass('focus');
        $(this).addClass('focus');
    });
    
    $('#buttonautofocus').click(function () {
        console.log($(this).attr('id'),lastFocus);
        if($(this).attr('id') != lastFocus) {
            console.log($(this), lastFocus);
            weekChart();
        }
        lastFocus = $(this).attr('id');
    });
    $('#monthshot').click(function () {
        if($(this).attr('id') != lastFocus) {
            addData(chart3,0);
        }
        lastFocus = $(this).attr('id');
    });

});
