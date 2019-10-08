var Names = ["tay", "bay", "jay"]
    d3.select("#A1")
    .append("p")
    .text(Names);

    d3.select("#A2")
    .selectAll("span")
    .data(Names)
    .enter()
    .append("span")
    .text(function(d){
        return d
    });

var planetpromise = d3.json("planets.json")
    planetpromise.then(
        function(planetdata)
        {
            console.log("planetdata", planetdata);
            drawplanet(planetdata)
        },
        function(err)
    {
        console.log("fail", err)
    }
    )
var drawplanet= function(planetdata)
{
    d3.select("#B3")
    .selectAll("img")
    .data(planetdata)
    .enter()
    .append("img")
    .attr("src", function(d)
         {
        return d.img;               
    })
}