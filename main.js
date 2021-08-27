let selection = document.querySelector("select");

selection.addEventListener("change", () => {
  let district = selection.options[selection.selectedIndex].value;
  if (district == "ampara") {
    divisionData("divisions/Ampara.json");
  } else if (district == "anuradhapura") {
    divisionData("divisions/Anuradhapura.json");
  } else {
    console.log("Error");
  }
});

function divisionData(division) {
  $(document).ready(function () {
    $.getJSON(division, function (data) {
      var division_data = "";
      $.each(data, function (key, value) {
        division_data += "<tr>";
        division_data += "<td>" + value.District + "</td>";
        division_data += "<td>" + value.DivisionalSecretariat + "</td>";
        division_data += "<td>" + value.Name + "</td>";
        division_data += "</tr>";
      });
      $("#table").append(division_data);
    });
  });
}
window.onload;
