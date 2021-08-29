$.getJSON("divisions/data.json", function (data) {
  var division = "";
  $.each(data, function (key, value) {
    division += "<tr>";
    division += "<td>" + value.Province + "</td>";

    division += "<td>" + value.District + "</td>";

    division += "<td>" + value.Divisional_Secretariat + "</td>";
    division +=
      "<td>" +
      value.Name_Sinhala +
      "/" +
      value.Name_Tamil +
      "/" +
      value.Name_English +
      "</td>";
    division += "</tr>";
  });
  json = data;
  $("#table tbody").append(division);
});

// function filteredTable() {
//   var results = [];
//   var District = "District";
//   var Name = "Name";
//   var Address = "Address";
//   var MOH = "MoH";
//   var searchVal = document.getElementById("search").value.toLowerCase();
//   $("#table tbody").html("");
//   for (var i = 0; i < json.length; i++) {
//     if (json[i][District].toLowerCase().includes(searchVal)) {
//       filterData();
//     } else if (json[i][Name].toLowerCase().includes(searchVal)) {
//       filterData();
//     } else if (json[i][Address].toLowerCase().includes(searchVal)) {
//       filterData();
//     } else if (json[i][MOH].toLowerCase().includes(searchVal)) {
//       filterData();
//     }
//     function filterData() {
//       var newroutes_data = "";
//       newroutes_data += "<tr>";
//       newroutes_data += "<td>" + json[i].District + "</td>";
//       newroutes_data += "<td>" + json[i].Name + "</td>";
//       newroutes_data += "<td>" + json[i].Address + "</td>";
//       newroutes_data += "<td>" + json[i].Phone + "</td>";
//       newroutes_data += "<td>" + json[i].MoH + "</td>";
//       newroutes_data += "</tr>";

//       results.push(newroutes_data);
//       $("#table tbody").append(newroutes_data);
//     }
//   }
// }
