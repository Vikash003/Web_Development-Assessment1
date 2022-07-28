function myFunction() {
    let dml = document.getElementById("dashboard").style.marginLeft || "0px";
    let wd = document.getElementById("sidebar").style.width || "0px";
    if (wd === "0px") {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("dashboard").style.marginLeft = "250px";
        document.getElementById("dashboard").style.borderRadius = "20px 0 0 0";
    }
    else if (wd === "250px") {
        document.getElementById("sidebar").style.width = "0px";
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
        curveType: 'function',
        legend: { position: 'bottom' },
        vAxis: { ticks: [5, 10, 15, 20, 25] },
        colors: ['#B5B3FB', '#80E2FF'],
        pointSize: 4,
        pointShape: 'circle',
        // areaOpacity: 0.15,
        // type: 'area'
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}

//donut chart

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Sales'],
        ['France', 3],
        ['Italy', 2],
        ['Japan', 2],
        ['Canada', 2]
    ]);

    var options = {
        // title: 'Sales Distribution',
        pieSliceText: "none",
        pieHole: 0.575,
        colors: ['#80E2FF', '#F49FA8', '#FFDF94', '#B5B3FB'],
        legend: { position: "bottom" },
        pieStartAngle: -40
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}

// dropdown by click under 1024px

// document.getElementById("dropdown-menu").style.display = "none";

function profileNav() {
    let dropToggle = document.getElementById("dropdown-menu").style.display;
    if (window.innerWidth <= 1024) {
        if (dropToggle == "none") {
            document.getElementById("dropdown-menu").style.display = "block";
            document.getElementById("drop-arrow").style.display = "block";
            document.getElementById("drop-arrow").style.transform = "rotate(-180deg)";
            document.getElementById("drop-arrow").style.marginTop = "2px";
        }
        else {
            document.getElementById("dropdown-menu").style.display = "none";
            document.getElementById("drop-arrow").style.transform = "rotate(0deg)";
            document.getElementById("drop-arrow").style.marginTop = "-2px";
        }
    }
}

// document.getElementById("noti-dropdown-menu").style.display = "none";

function notiNav() {
    let notiToggle = document.getElementById("noti-dropdown-menu").style.display;
    if (window.innerWidth <= 1024) {

        if (notiToggle == "none") {
            document.getElementById("noti-dropdown-menu").style.display = "block";
            document.getElementById("green").style.display = "none";
        }
        else {
            document.getElementById("noti-dropdown-menu").style.display = "none";
            document.getElementById("green").style.display = "block";
        }
    }
}