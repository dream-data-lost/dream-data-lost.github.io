var Width = 800;
var Height = 500;
var BarElement;
var dataSet = [403, 440];
var barWidth = 80;
var barMargin = 50;
var offsetX = 30;
var offsetY = 20;
var dataMax = 500;

var yScale = d3.scale.linear()
				.domain([0, 500])
				.range([0, 300])

BarElement = d3.select("#graph08")
			   .selectAll("rect")
			   .data(dataSet)

BarElement.enter()
			.append("rect")
			.attr("class", "bar01")
			.attr("height", function(d, i){
				var temp = yScale(d)
				return temp;
			})
			.attr("width", barWidth)
			.attr("x", function(d, i){
				return i * (barWidth + barMargin) + offsetX + 10;
			})
			.attr("y", function(d, i){
				return Height - yScale(d)  - offsetY;
			})

BarElement.enter()
			.append("text")
			.attr("class", "barNum01")
			.attr("x", function(d, i){
				return i * (barWidth + barMargin) + offsetX + 50;
			})
			.attr("y", function(d, i){
				return Height - yScale(d) - 5 - offsetY;
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
				return ["쾌적", "불쾌"][i];
			});

			BarElement.enter()
			.append("text")
			.attr("class", "barName")
			.attr("x", 150)
			.attr("y", offsetY + 40)
			.text("최근 3개년 분실물 일평균(건)")
