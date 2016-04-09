var Width = 800;
var Height = 500;
var BarElement;
var dataSet = [56652, 57141, 59840, 61826, 74468, 80060, 64318];
var barWidth = 80;
var barMargin = 50;
var offsetX = 30;
var offsetY = 0;
var dataMax = 500;

var yScale = d3.scale.linear()
				.domain([0, 100000])
				.range([0, dataMax])

BarElement = d3.select("#graph04")
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
				return ["월", "화", "수", "목", "금", "토", "일"][i];
			})

BarElement.enter()
			.append("text")
			.attr("class", "barName")
			.attr("x", Width/2)
			.attr("y", offsetY + 20)
			.text("최근 3개년 요일별 분실 빈도");