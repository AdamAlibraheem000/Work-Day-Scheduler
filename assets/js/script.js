var rightNow = moment().format("MMM Do YYYY");
$("#currentDay").text(rightNow);
var arr = [];
var currentHour = moment().hour();

function setTime() {
  for (var i = 9; i < 18; i++) {
    if (currentHour < i) {
      $("#" + i).addClass("future");
    } else if (currentHour === i) {
      $("#" + i).addClass("present");
    } else if (currentHour > i) {
      $("#" + i).addClass("past");
    }
  }
}

setTime();

$(".saveBtn").on("click", function () {
  var id = $(this).attr("data-id");
  var text = $("#" + id).val();
  console.log(text);
  localStorage.setItem(id, text);
});

function displayVals() {
  for (let i = 0; i < 9; i++) {
    if (localStorage.getItem(i)) {
      let text = localStorage.getItem(i);
      $("#" + i).val(text);
    }
  }
}

displayVals();
