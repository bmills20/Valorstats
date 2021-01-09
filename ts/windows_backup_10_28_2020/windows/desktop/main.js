// Note to self: remember that js files will directly correspond to the HTML page that calls them. Create new js files per page to avoid null exceptions

$(document).ready(function () {

    //radar chart
    var ctx3 = $('#radardiv').get(0);
    var radarData = {
      labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
      datasets: [{
        label: "K/D Ratio",
        backgroundColor: "rgba(200,0,0,0.2)",
        data: [65, 75, 70, 80, 60, 80]
      }, {
        label: "Econ Score",
        backgroundColor: "rgba(0,0,200,0.2)",
        data: [54, 65, 60, 70, 70, 75]
      }]
    }
    var radarChart = new Chart(ctx3, {
        plugins:[{
            beforeInit: function(radarChart, options){
                radarChart.legend.afterFit = function(){
                    this.width = this.width - 150;
                };
            }
        }],
        type: 'radar',
        data: radarData,
        options:{
            legend: {
                position: 'left',
                align: 'center',
                labels: {
                    boxWidth: 15
                }
            },
            responsive: false,
            maintainAspectRatio: false
        }
    })
    
    
});
