var Width = 500;
var Height = 400;
var BarElement;
var dataSet = [516347, 553366, 588527];
var barWidth = 80;
var barMargin = 50;
var offsetX = 30;
var offsetY = 20;
var dataMax = 400;

var yScale = d3.scale.linear()
				.domain([0, 600000])
				.range([0, dataMax])

BarElement = d3.select("#graph01")
			   .selectAll("rect")
			   .data(dataSet)

BarElement.enter()
			.append("rect")
			.attr("class", "bar01")
			.attr("height", function(d, i){
				var temp = yScale(d)-100
				return temp;
			})
			.attr("width", barWidth)
			.attr("x", function(d, i){
				return i * (barWidth + barMargin) + offsetX + 10;
			})
			.attr("y", function(d, i){
				return Height - (yScale(d)-100)  - offsetY;
			})

BarElement.enter()
			.append("text")
			.attr("class", "barNum02")
			.attr("x", function(d, i){
				return i * (barWidth + barMargin) + offsetX + 50;
			})
			.attr("y", function(d, i){
				return Height - (yScale(d)- 240) - offsetY;
			})
			.text(function(d, i){
				return d;
			})



			BarElement.enter()
			.append("text")
			.attr("class", "barName")
			.attr("x", function(d, i){
				return i * 130 + 50 + offsetX;
			})
			.attr("y", Height - offsetY + 40)
			.text(function(d, i){
				return ["2013", "2014", "2015"][i];
			})

