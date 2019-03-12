// from data.js
var tbody = d3.select("tbody")
var tableData = data;

tableData.forEach((ufo)=>{
    console.log(ufo);
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value])=> {
             console.log(key, value);
             var cell = tbody.append("td");
             cell.text(value);
           });
});


//taking liberally from the weatherReport classwork here.

var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

button.on("click", function() {
    d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
  });
  
  // // Input fields can trigger a change event when new text is entered.
  inputField.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
  });
  