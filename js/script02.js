var Width = 500;
var Height = 500;
var BarElement;
var dataSet =  [[516347, 349838], [553366, 352011], [588527, 330000]];
var barWidth = 80;
var barMargin = 50;
var offsetX = 30;
var offsetY = 20;
var dataMax = 500;

BarElement = d3.select("#graph02")
			   .selectAll("rect")
			   .data(dataSet)

var yScale = d3.scale.linear()
				.domain([0, 600000])
				.range([0, dataMax])

BarElement.enter()
			.append("rect")
			.attr("class", "bar02")
			.attr("height", function(d, i){
				var temp = yScale(d[0]) - 100;
				return temp;
			})
			.attr("width", barWidth)
			.attr("x", function(d, i){
				return i * (barWidth + barMargin) + offsetX + 10;
			})
			.attr("y", function(d, i){
				return Height - (yScale(d[0]) - 100)  - offsetY;
			})

BarElement.enter()
			.append("rect")
			.attr("class", "bar01")
			.attr("height", function(d, i){
				var temp = yScale(d[1]) - 70;
				return temp;
			})
			.attr("width", barWidth)
			.attr("x", function(d,i){
				return i * (barWidth + barMargin) + offsetX + 10
			})
			.attr("y", function(d, i){
				return Height - (yScale(d[1]) - 70)  - offsetY;
			})

BarElement.enter()
			.append("text")
			.attr("class", "barNum01")
			.attr("x", function(d, i){
				return i * (barWidth + barMargin) + offsetX + 50;
			})
			.attr("y", function(d, i){
				return Height - (yScale(d[0]) - 100) - 5 - offsetY
			})
			.text(function(d, i){
				var temp = parseInt(d[1]/d[0] * 100)
				return (100 - temp) + "%";
			})
BarElement.enter()
			.append("text")
			.attr("class", "barNum02")
			.attr("x", function(d, i){
				return i * (barWidth + barMargin) + offsetX + 50;
			})
			.attr("y", function(d, i){
				return Height - (yScale(d[1]) - 160) -  offsetY
			})
			.text(function(d, i){
				return d[1];
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

