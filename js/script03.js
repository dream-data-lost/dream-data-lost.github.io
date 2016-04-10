var Width = 600;
var Height = 500;
var PieElement;
var offsetX = 30;
var offsetY = 20;
var dataSet =  [
					{ label : "지갑" , count : 208115},
					{ label : "휴대폰" , count : 186080},
					{ label : "가방" , count : 41948},
					{ label : "전자기기" , count : 6499},
					{ label : "귀금속" , count : 4741},
					{ label : "카드" , count : 3585},
					{ label : "의류" , count : 3337}
				];
var radius = Math.min(Width, Height) / 2;
var color = /*d3.scale.category10();*/["#f5f3bd", "#02c39a", "#00a896", "#96d2d3", "#7be2ff", "#00ccdc", "#05668d"];
var pie = d3.layout.pie()
			.value(function(d){
				return d.count;
			});
var xScale = d3.scale.ordinal()
							.domain(d3.range(dataSet.length))
							.rangeRoundBands([0, Width], 0.05);
var x = d3.scale.ordinal()
    .rangeRoundBands([0, Width], .1);

var y = d3.scale.linear()
    .range([Height, 0]);


/*var svg = d3.select("#graph03")
			.append("svg")
			.attr("width", Width)
			.attr("height", Height)
			.append("g")
			.attr("transform", "translate(" + (Width/2) + "," + (Height/2) + ")");

var arc = d3.svg.arc()
			.outerRadius(200)
			.innerRadius(80);

var pie = d3.layout.pie()
			.value(function(d){
				return d.count;
			})
			.sort(null);

var path = svg.selectAll("path")
				.data(pie(dataSet))
				.enter()
				.append("path")
				.attr("d", arc)
				.attr("fill" , function(d, i){
					return color(d.data.label);
				});*/

var arc = d3.svg.arc()
			.innerRadius(100)
			.outerRadius(200);

var svg = d3.select("#graph03")
			.append("svg")
			.attr("width", Width)
			.attr("height", Height);

var arcs = svg.selectAll("g.arc")
			.data(pie(dataSet))
			.enter()
			.append("g")
			.attr("class","arc")
			.attr("transform", "translate("+ 200 + "," + 200 + ")");

			arcs.append("path")
				.attr("fill", function(d, i){
					var color = /*d3.scale.category10();*/["#f5f3bd", "#02c39a", "#00a896", "#96d2d3", "#7be2ff", "#00ccdc", "#05668d"];
					return color[i];
				})
				.attr("d", arc);
			/*arcs.append("text")
				.attr("transform", function(d){
					return "translate(" + arc.centroid(d)[0] + ","+arc.centroid(d)[1] + ")";
				})
				.attr("text-anchor", "middle")
				.text(function(d){
					return d.value;
				});*/

var tooltip = d3.select("#graph03")
				.append("div")
				.attr("class", "tooltip2");

			tooltip.append("div")
				.attr("class", "label2");

			tooltip.append("div")
				.attr("class", "count");
			tooltip.append("div")
				.attr("class", "percent");

			arcs.on("mouseover", function(d){
				var total = d3.sum(dataSet.map(function(d){
					return d.count;
				}));
				var percent = Math.round(1000 * d.data.count / total) / 10;
				var x = arc.centroid(d)[0];
				var y = arc.centroid(d)[1];
				tooltip.select(".label2").html(d.data.label);
				tooltip.select(".count").html(d.data.count + "건");
				tooltip.select(".percent").html(percent + "%");
				tooltip.style("visibility", "visible");
			});

			arcs.on("mouseout", function(){
				tooltip.style("visibility", "hidden");
			})

			
var legend = svg.append("g")
				.attr("class", "legend")
				.attr("transform", "translate(" + (Width - 100 )+ "," + 40 +")")
				.selectAll("g")
				.data(["지갑", "휴대폰", "가방", "전자기기", "귀금속", "카드", "의류"])
				.enter()
				.append("g");

			legend.append("circle")
				.attr("cy", function(d, i){
					return i * 50;
				})
				.attr("r", 10)
				.attr("fill", function(d, i){
					var color = /*d3.scale.category10();*/["#f5f3bd", "#02c39a", "#00a896", "#96d2d3", "#7be2ff", "#00ccdc", "#05668d"];
					return color[i];
				});

			legend.append("text")
				.attr("y", function(d, i){
					return i * 50 + 5;
				})
				.attr("x", 20)
				.text(function(d){
					return d;
				});
/*var w = 600,
    h = 500,
    r = Math.min(w, h) / 2,
    labelr = r + 30, // radius for label anchor
    color = d3.scale.category10(),
    donut = d3.layout.pie(),
    arc = d3.svg.arc().innerRadius(r*.6).outerRadius(r);

console.log(r * .6)
console.log(r-100)

var vis = d3.select("body")
  .append("svg:svg")
    .data([dataSet])
    .attr("width", w + 150)
    .attr("height", h);

var arcs = vis.selectAll("g.arc")
    .data(donut.value(function(d) { return d.count }))
  .enter().append("svg:g")
    .attr("class", "arc")
    .attr("transform", "translate(" + (r + 30) + "," + r + ")");

arcs.append("svg:path")
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", arc);

arcs.append("text")
    .attr("text-anchor", "middle")
    .attr("x", function(d) {
        var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
        d.cx = Math.cos(a) * (r - 45);
        return d.x = Math.cos(a) * (r+30);
    })
    .attr("y", function(d) {
        var a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
        d.cy = Math.sin(a) * (r - 45);
        return d.y = Math.sin(a) * (r+30);
    })
    .text(function(d) { return d.value.toFixed(2);  })
    .each(function(d) {
        var bbox = this.getBBox();
        d.sx = d.x - bbox.width/2 - 2;
        d.ox = d.x + bbox.width/2 + 2;
        d.sy = d.oy = d.y + 5;
    });

vis.append("defs").append("marker")
    .attr("id", "circ")
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("refX", 3)
    .attr("refY", 3)
    .append("circle")
    .attr("cx", 3)
    .attr("cy", 3)
    .attr("r", 3);

arcs.append("path")
    .attr("class", "pointer")
    .style("fill", "none")
    .style("stroke", "black")
    .attr("marker-end", "url(#circ)")
    .attr("d", function(d) {
        if(d.cx > d.ox) {
            return "M" + d.sx + "," + d.sy + "L" + d.ox + "," + d.oy + " " + d.cx + "," + d.cy;
        } else {
            return "M" + d.ox + "," + d.oy + "L" + d.sx + "," + d.sy + " " + d.cx + "," + d.cy;
        }
    });*/

