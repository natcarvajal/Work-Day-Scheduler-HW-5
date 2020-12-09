// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var now = dayjs().format("dddd, MMMM DD, YYYY");
$("#currentDay").append(now);

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

$(document).ready(() => {
  // * WHEN I scroll down
  // * THEN I am presented with time blocks for standard business hours
  // * WHEN I view the time blocks for that day
  // * THEN each time block is color-coded to indicate whether it is in the past, present, or future
  for (i = 9; i < 23; i++) {
    let time_class = "";
    if (i < dayjs().hour()) {
      time_class = "past";
    } else if (i == dayjs().hour()) {
      time_class = "present";
    } else {
      time_class = "future";
    }

    // Given the hour determine if it is past present or future
    // Given the hour, figure out if it is AM or PM
    $(".container").append(`<div class="row">
    <div class="col-md-1 ${time_class}" id="9">${i > 12 ? i - 12 : i} ${
      i > 11 ? "PM" : "AM"
    }
    </div>
    <textarea class="col-md-10 description">
    </textarea>
    <div hour=${i} class="col-md-1 saveBtn">
      <i class="fas fa-save fa-lg"></i>
    </div>
  </div>`);
  }
  // * WHEN I click the save button for that time block
  // * THEN the text for that event is saved in local storage

  // Create an event listener for the save button
  $(".container").on("click", ".saveBtn", function () {
    let hour = $(this).attr("hour");
    let text = $(this).siblings("textarea")[0];
    console.log(text.value);
    // Get text from input
  });

  // Save to local storage
  localStorage.setItem;

  // * WHEN I refresh the page
  // * THEN the saved events persist
});

// WHEN I refresh the page
// THEN the saved events persist
