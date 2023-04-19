d3.csv("brgy.csv").then(function (data) {
  // console.log(data);

  var brgy = data;

  var button = d3.select("#button");

  var form = d3.select("#form");

  button.on("click", runEnter);
  form.on("submit", runEnter);

  function runEnter() {
    d3.select("tbody").html("")
    d3.selectAll("p").classed('noresults', true).html("")
    d3.event.preventDefault();
    var inputElement = d3.select("#user-input");
    var inputValue = inputElement.property("value").toLowerCase().trim();

    // console.log(inputValue.length);
    // console.log(brgy);
    if (inputValue.length < 6){
      d3.select("p").classed('noresults2', true).html("<center><strong>Barangay not in directory list. Please refer to list for correct name.</strong>")
      inputValue = "Something to give no results"
    }
    var filteredData = brgy.filter(brgy => brgy.barangay.toLowerCase().trim().includes(inputValue));
    // console.log(filteredData.length)
    if (filteredData.length === 0 && inputValue !== "Something to give no results"){
      d3.select("p").classed('noresults', true).html("<center><strong>No results. Please check your spelling!</strong>")
    }
    output = _.sortBy(filteredData, 'num').reverse()

    for (var i = 0; i < filteredData.length; i++) {
      // console.log(output[i]['position'])
      // console.log(output[i]['num'])
      // d3.select("tbody>tr>td").text(output[i]['position']);
      d3.select("tbody").insert("tr").html("<td>"+[i+1]+"</td>"+"<td>"+output[i]['position']+"</a>"
      + "</td>" +"<td>" +(output[i]['name'])+"</td>" +"<td>" +(output[i]['province'])+"</td>"  +"<td>" +(output[i]['city'])+"</td>"+"<td>" +(output[i]['telno'])+"</td>") }
  };
  window.resizeTo(screen.width,screen.height)


});