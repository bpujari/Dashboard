function addRow(){"use strict";var e=document.getElementById("tableBody"),t=document.createElement("tr"),a=document.createElement("td"),d=document.createElement("td"),n=document.createElement("td"),r=document.createElement("td"),l=document.createElement("td"),i=document.createElement("td");a.innerHTML='<td><img src="'+imagesrc+'" alt="" width="50"></td>',d.innerHTML=document.getElementById("product-sku").value,n.innerHTML=document.getElementById("product-price").value,r.innerHTML=document.getElementById("product-stock").value,l.innerHTML=document.getElementById("product-name").value,i.innerHTML=document.getElementById("product-name").value,t.appendChild(a),t.appendChild(d),t.appendChild(n),t.appendChild(r),t.appendChild(l),t.appendChild(i),e.appendChild(t)}function showImage(){var e=document.getElementById("product-upload"),t=new FileReader;t.onload=function(){imagesrc=t.result},t.readAsDataURL(e.files[0])}var imagesrc;$(function(){$("#sales-chart").highcharts({chart:{type:"areaspline"},title:{text:"Total Sales"},legend:{layout:"vertical",align:"left",verticalAlign:"top",x:150,y:100,floating:!0,borderWidth:1,backgroundColor:Highcharts.theme&&Highcharts.theme.legendBackgroundColor||"#FFFFFF"},xAxis:{categories:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],plotBands:[{from:4.5,to:6.5,color:"rgba(68, 170, 213, .2)"}]},yAxis:{title:{text:"Sales units"}},tooltip:{shared:!0,valueSuffix:" units"},credits:{enabled:!1},plotOptions:{areaspline:{fillOpacity:.5}},series:[{name:"John",data:[3,4,3,5,4,10,12]},{name:"Jane",data:[1,3,4,3,3,5,4]}]})}),$(document).ready(function(){$(".sidebar-toggle").click(function(){return $("#wrapper").toggleClass("sidebar-hidden"),$("#wrapper").hasClass("sidebar-hidden")?$("#wrapper").removeClass("push-left"):$("#wrapper").addClass("push-left"),!1})}),$(function(){var e=function(){var e=$(window).width();992>=e?$("#wrapper").addClass("sidebar-hidden"):$("#wrapper").removeClass("sidebar-hidden")};setInterval(function(){$(window).resize(function(){e()})},200),e(),$(".header-topbar").scrollToFixed()});