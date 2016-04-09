var Width = 800;
var Height = 500;
var BarElement;
var dataSet = [115811, 119245, 119809, 99440];
var barWidth = 80;
var barMargin = 50;
var offsetX = 30;
var offsetY = 20;
var dataMax = 500;

var yScale = d3.scale.linear()
				.domain([0, 130000])
				.range([0, dataMax])

BarElement = d3.select("#graph06")
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
				return Height - yScale(d)  - offsetY + 80;
			})

BarElement.enter()
			.append("text")
			.attr("class", "barNum01")
			.attr("x", function(d, i){
				return i * (barWidth + barMargin) + offsetX + 50;
			})
			.attr("y", function(d, i){
				return Height - yScale(d) - 5 - offsetY + 80;
			})
			.text(function(d, i){
				return d;
			});

			BarElement.enter()
			.append("text")
			.attr("class", "barName")
			.attr("x", function(d, i){
				return i * 130 + 50 + offsetX;
			})
			.attr("y", Height - offsetY + 100)
			.text(function(d, i){
				return ["봄", "여름", "가을", "겨울"][i];
			})

BarElement.enter()
			.append("text")
			.attr("class", "barName")
			.attr("x", 280)
			.attr("y", offsetY + 20)
			.text("최근 3개년 개절별 분실 빈도");