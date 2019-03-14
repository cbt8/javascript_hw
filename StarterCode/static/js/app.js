// from data.js
var tbody = d3.select("tbody")
var tableData = data;

tableData.forEach((ufo)=>{
    //console.log(ufo);
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
var newText
inputField.on("change", function() {
    newText = d3.event.target.value;
    console.log(newText)
});


//everything below this is in progress




// this is an arrow function from the previous homework assignment

//var filteredData = people.filter(person => person.bloodType === inputValue)


button.on("click", function() {
    
    tableData.forEach((ufo)=>{
        console.log(ufo);
        
        Object.entries(ufo).forEach(([key, value])=> {
                 console.log(key, value);
                 tbody.deleteRow()
                 if  (key === "datetime"){
                 var cell = tbody.append("td");
                 cell.text(value);}
                 else {var cell = tbody.append("td");
                 cell.text("");}
               
               
                });
              });
            });


              
    
    
 // });
  
  // // Input fields can trigger a change event when new text is entered.

  //});
  