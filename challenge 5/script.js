$(function () {
  // Function to update the classes based on the current time
  function updateHourClasses() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

      if (timeBlockHour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }

  // Function to retrieve and set user input from localStorage
  function retrieveUserInput() {
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var savedInput = localStorage.getItem(timeBlockId);

      // Set the textarea value with the saved input
      $(this).find(".description").val(savedInput);
    });
  }

  // Function to display the current date and day in the header
  function displayCurrentDateTime() {
    var currentDateTime = dayjs().format("dddd, MMMM D, YYYY h:mm A");
    $("#currentDay").text("Today is " + currentDateTime);
  }

  // Call the function to update classes on page load
  updateHourClasses();

  // Call the function to retrieve and set user input on page load
  retrieveUserInput();

  // Call the function to display the current date on page load
  displayCurrentDateTime();

  // Event listener for the save button click
  $(".saveBtn").on("click", function () {
    // Get the id of the corresponding time-block
    var timeBlockId = $(this).closest(".time-block").attr("id");

    // Get the user input from the textarea
    var userInput = $(this).siblings(".description").val();

    // Save the user input to local storage using the time block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });
});
