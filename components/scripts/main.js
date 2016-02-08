// Add products in table
var imagesrc;

function addRow() {
    "use strict";
    
    var tableBody = document.getElementById("tableBody");
    
    
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");  
    
    td1.innerHTML = '<td><img src="'+imagesrc+'" alt="" width="50"></td>';
    td2.innerHTML = document.getElementById("product-sku").value;
    td3.innerHTML = document.getElementById("product-price").value;
    td4.innerHTML = document.getElementById("product-stock").value;
    td5.innerHTML = document.getElementById("product-name").value;
    td6.innerHTML = document.getElementById("product-name").value;
    
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    row.appendChild(td6);
    
    tableBody.appendChild(row);
};

function showImage() {
    var src = document.getElementById("product-upload");
    var fr = new FileReader();
    fr.onload = function(){
        imagesrc = fr.result;
    }
    fr.readAsDataURL(src.files[0]);
}


// Sales Chart
$(function () {
    $('#sales-chart').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Total Sales'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: 'Sales units'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12]
        }, {
            name: 'Jane',
            data: [1, 3, 4, 3, 3, 5, 4]
        }]
    });
});

// Sidebar Toggle
$(document).ready(function(){
    $('.sidebar-toggle').click(function(){
        $('#wrapper').toggleClass('sidebar-hidden');

        if($('#wrapper').hasClass('sidebar-hidden')){
            $('#wrapper').removeClass('push-left');
          } else {
            $('#wrapper').addClass('push-left');
          }
        return false;
    });
});


$(function(){
    // Hide sidebar in mobile And Tablet
    var hideSidebar = function(){
      var browserWidth = $(window).width();
      if(browserWidth <= 992){
        $('#wrapper').addClass('sidebar-hidden');
      } else {
        $('#wrapper').removeClass('sidebar-hidden');
      }
    } // end hidesidebar

    // Refresh window width while browser resize
    setInterval(function(){
      $(window).resize(function(){
        hideSidebar();
      });
    }, 200);

    hideSidebar();

    // Scroll to fixed
    $('.header-topbar').scrollToFixed();
});

