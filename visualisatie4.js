var input_objects = document.getElementById("myNumber").value;
var grid_data = grid_data(input_objects);  
  

function grid_data(input_objects) {

    var data = new Array();
    
    var total_objects = input_objects;
    var columns = 50;
    
    var width = 10;
    var height = 10;
    
    var x_position = 1;
    var y_position = 1;

    for (var i = 0; i < total_objects; i++) {
        
        // generate coordinates for objects if it fits on one row 
        if (x_position<(columns+1)) {
            
            data.push({
                x: x_position,
                y: y_position,
                width: width,
                height: height
            });

            x_position++;

        } else {
            y_position++;
            x_position = 1;
            
            data.push({
                x: x_position,
                y: y_position,
                width: width,
                height: height
            });

            x_position++;   

        };      
    };
    return data;
};



var svg = d3.select("#graphic")
    .append("svg")
    .attr("width","904px")
    .attr("height","100%");

var square = svg.selectAll("svg")
    .data(grid_data)
    .enter().append("rect")
    .attr("class","square")
    .attr("x", function(d) { return (d.x* 15) +65; })
    .attr("y", function(d) { return (d.y* 15) +65;})
    .attr("width", function(d) { return d.width; })
    .attr("height", function(d) { return d.height; })
    .classed(".square", "True")


