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
            makelist(planetdata)
            maketable(planetdata)
            makecoloumn(planetdata)
            makedata(planetdata)
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
var makelist = function(planetdata)
{
    d3.select("#B4")
    .append("ol")
    .selectAll("li")
    .data(planetdata)
    .enter()
    .append("li")
    .append("name")
    .attr("src", function(d)
         {
        return d.name;
    })
    .append("span")
    .text(function(d){return d.name})

}
var maketable = function(planetdata)
{
d3.select("#C1")
    .append("table")
    .selectAll("tr")
    .data(planetdata)
    .enter()
    .append("tr")
 
}
var makecoloumn = function(planetdata)
{
    var rows =d3.select("#C2")
    .append("table")
    .selectAll("tr")
    .data(planetdata)
    .enter()
    .append("tr")
    
   var tableDATA =  
       rows.append("td")
      .append("span")
    .text(function(d){return d.name})
 
}
var makedata = function(planetdata)
{
     var rows =d3.select("#C3")
    .append("table")
    .selectAll("tr")
    .data(planetdata)
    .enter()
    .append("tr")
    
   var nam =  
       rows.append("td")
      .append("span")
    .text(function(d){return d.name})
   var distance =  
       rows.append("td")
      .append("span")
    .text(function(d){return d.distance})
   var tableDATA =  
       rows.append("td")
      .append("span")
    .text(function(d){return d.radius})
   var tableDATA =  
       rows.append("td")
      .append("span")
    .text(function(d){return d.density})
   var tableDATA =  
       rows.append("td")
      .append("span")
    .text(function(d){return d.moons})
}
