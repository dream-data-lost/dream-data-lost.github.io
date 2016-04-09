var Width = 700;
var Height = 500;
var padding = 40;
var offsetX = 30;
var offsetY = 20;
var scatterElement;
var dataSet = [
					[100, 35651], [200, 39017], [300, 39164], [400, 34022]
				];

function drawScale() {
	var maxX = d3.max(dataSet, function(d, i){
		return d[0] + 30;
	})
	var maxY = d3.max(dataSet, function(d, i){
		return d[1];
	})
	var yScale = d3.scale.linear()
				.domain([32000, 42000])
				.range([500,0]);

	d3.select("#graph07")
		.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(" + (offsetX+20) + "," + (Height - 500 - offsetY + 80) + ")")
		.call(
			d3.svg.axis()
			.scale(yScale)
			.orient("left")
			)

var grid = d3.select("#graph07")
			.append("g");
var rangeX = d3.range(50, maxX, 50);
var rangeY = d3.range(20, 540, 20);
		grid.selectAll("line.y")
			.data(rangeY)
			.enter()
			.append("line")
			.attr("class", "grid")
			.attr("x1", offsetX)
			.attr("y1", function(d, i){
				return Height - d - offsetY + 100;
			})
			.attr("x2", maxX + offsetX)
			.attr("y2", function(d, i){
				return Height - d - offsetY + 100;
			});

scatterElement = d3.select("#graph07")
					.selectAll("circle")
					.data(dataSet);

				scatterElement.enter()
					.append("circle")
					.attr("class", "mark")
					.attr("cx", function(d, i){
						return d[0] + offsetX;
					})
					.attr("cy", function(d, i){
						return yScale(d[1]) - offsetY + 80;
					})
					.attr("r", 5);


				scatterElement.enter()
					.append("text")
					.attr("class", "barName")
					.attr("x", function(d, i){
						return d[0] + offsetX;
					})
					.attr("y", Height - offsetY + 110)
					.text(function(d, i){
						return ["봄", "여름", "가을", "겨울"][i];
					})

				scatterElement.enter()
					.append("text")
					.attr("class", "barName")
					.attr("x", 280)
					.attr("y", offsetY + 20)
					.text("2013 계절별 분실 건수");
var lineFuntion = d3.svg.line()
						.x(function(d) { return d[0] + offsetX; })
						.y(function(d) { return yScale(d[1]) - offsetY + 80; })
						.interpolate("linear");

var lineGraph = scatterElement.enter()
							.append("path")
							.attr("d", lineFuntion(dataSet))
							.attr("class", "line");

	d3.select("#Nov4")
	.on("click", function(){
		console.log('dfd');
				dataSet =  [
					[100, 35651], [200, 39017], [300, 39164], [400, 24022]
				];
				    scatterElement.selectAll("circle")
					.data(dataSet)
					.attr("cy", function(d, i){
						return yScale(d[1]) - offsetY + 200;
					})
					.attr("r", 5);

					scatterElement.selectAll("path")
						.attr("d", lineFuntion(dataSet));
	});
	d3.select("#Dec1")
		.on("click", function(){
			console.log('dd');
				dataSet =  [
					[100, 38956], [200, 39533], [300, 39343], [400, 36946]
				];
				    scatterElement.selectAll("circle")
					.data(dataSet)
					.attr("cx", function(d, i){
						return d[0] + offsetX;
					})	
					.attr("cy", function(d, i){
						return yScale(d[1]) - offsetY + 200;
					})
					.attr("r", 5);
					scatterElement.selectAll("path")
						.attr("d", lineFuntion(dataSet));
	});
	d3.select("#Dec2")
		.on("click", function(){
			console.log('dsd');
				dataSet =  [
					[100, 41204], [200, 41454], [300, 41302], [400, 38472]
				];
				    scatterElement.selectAll("circle")
					.data(dataSet)
					.attr("cx", function(d, i){
						return d[0] + offsetX;
					})	
					.attr("cy", function(d, i){
						return yScale(d[1]) - offsetY + 200;
					})
					.attr("r", 5);
					scatterElement.selectAll("path")
						.attr("d", lineFuntion(dataSet));
	});
};

drawScale();