//import the data from data.js
const tableData = data;

//reference the HTML table using d3
var tbody = d3.select("tbody");

//simple JavaScript console.log statement
// function printHello(){
//     console.log("Hello There!");
// };
// convert above function to arrow function
printHello = () => "Hello There!";

//take two numbers and add them
function addition(a, b) {
    return a + b
    console.log(addition(4, 5));
}
//convert to arrow function
addition = (a, b) => a + b;

//functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}
//convert to arrow function
doubleAddition = (c, d) => addition(c,d) * 2;

// create new function 
function buildTable(data){
    //clear out existing data 
    tbody.html("");
    //looped through each object in the array
    data.forEach(dataRow) => {
        //appended a row to the HTML table
        let row = tbody.append("tr");
        //Added each value from the object into a cell
        Object.values(dataRow).forEach((val) =>{
            let cell = row.append("td");
            cell.text(val);

        }

    );
});

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);