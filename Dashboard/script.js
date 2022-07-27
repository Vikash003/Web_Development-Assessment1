function myFunction() {
    let dml = document.getElementById("dashboard").style.marginLeft || "0px";
    let wd = document.getElementById("mySidebar").style.width || "0px";
    if (wd === "0px") {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("dashboard").style.marginLeft = "250px";
        document.getElementById("dashboard").style.borderRadius = "20px 0 0 0";
    }
    else if (wd === "250px") {
        document.getElementById("mySidebar").style.width = "0px";
        document.getElementById("dashboard").style.marginLeft = "0px";
        document.getElementById("dashboard").style.borderRadius = "0px";
    }
}

document.getElementById("dashboard").style.borderRadius = "0px";

// line chart

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Price', 'Products sold', 'Total views'],
        ['Jan', 15, 19],
        ['Feb', 10.5, 8],
        ['Mar', 15.5, 16],
        ['Apr', 18, 12.5],
        ['May', 15.5, 16.5],
        ['Jun', 23.5, 10]
    ]);

    var options = {
        title: 'Statistics',
        curveType: 'function',
        legend: { position: 'bottom' },
        vAxis: { ticks: [5,10,15,20,25] },
        colors:['#B5B3FB','#80E2FF'],
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}
