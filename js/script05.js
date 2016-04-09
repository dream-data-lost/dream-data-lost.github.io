var Width = 700;
var Height = 500;
var padding = 40;
var offsetX = 30;
var offsetY = 20;
var scatterElement;
var dataSet = [
					[100, 214], [200, 187], [300, 193], [400, 152], [500, 216], [600, 327], [700, 212]
				];

function drawScale() {
	var maxX = d3.max(dataSet, function(d, i){
		return d[0] + 30;
	})
	var maxY = d3.max(dataSet, function(d, i){
		return d[1];
	})
	var yScale = d3.scale.linear()
				.domain([0, 400])
				.range([maxY,0]);

	d3.select("#graph05")
		.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(" + offsetX + "," + (Height - maxY- offsetY) + ")")
		.call(
			d3.svg.axis()
			.scale(yScale)
			.orient("left")
			)

var Rscale = d3.scale.linear()
				.domain([0,d3.max(dataSet, function(d){
						return d[1];
						})])
				.range([2,12]);	
var grid = d3.select("#graph05")
			.append("g");
var rangeX = d3.range(50, maxX, 50);
var rangeY = d3.range(20, maxY, 20);
		grid.selectAll("line.y")
			.data(rangeY)
			.enter()
			.append("line")
			.attr("class", "grid")
			.attr("x1", offsetX)
			.attr("y1", function(d, i){
				return Height - d - offsetY;
			})
			.attr("x2", maxX + offsetX)
			.attr("y2", function(d, i){
				return Height - d - offsetY;
			});

scatterElement = d3.select("#graph05")
					.selectAll("circle")
					.data(dataSet);

				scatterElement.enter()
					.append("circle")
					.attr("class", "mark")
					.attr("cx", function(d, i){
						return d[0] + offsetX;
					})
					.attr("cy", function(d, i){
						return yScale(d[1]) - offsetY + 200;
					})
					.attr("r", 5);


				scatterElement.enter()
					.append("text")
					.attr("class", "barName")
					.attr("x", function(d, i){
						return d[0] + offsetX;
					})
					.attr("y", Height - offsetY + 40)
					.text(function(d, i){
						return ["월", "화", "수", "목", "금", "토", "일"][i];
					});

				scatterElement.enter()
					.append("text")
					.attr("class", "barName")
					.attr("x", 380)
					.attr("y", offsetY + 80)
					.text("2015 11월 4째주 추세그래프 패턴");
var lineFuntion = d3.svg.line()
						.x(function(d) { return d[0] + offsetX; })
						.y(function(d) { return yScale(d[1]) - offsetY + 200; })
						.interpolate("linear");

var lineGraph = scatterElement.enter()
							.append("path")
							.attr("d", lineFuntion(dataSet))
							.attr("class", "line");

	d3.select("#Nov4")
	.on("click", function(){
		console.log('dfd');
				dataSet =  [
					[100, 214], [200, 187], [300, 193], [400, 152], [500, 216], [600, 327], [700, 212]
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
					[100, 201], [200, 198], [300, 210], [400, 199], [500, 228], [600, 293], [700, 234]
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
					[100, 165], [200, 191], [300, 194], [400, 236], [500, 273], [600, 366], [700, 232]
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