// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

$("#btnSubmit").click(function () {
    // Makes it so the browser says on the current page so the user can see the calculated outcome
    event.preventDefault();

    // Hours, rate, and output variables that take the inputed value entered by the user by using the id
    let hours = parseFloat($("#hours").val());
    let rate = parseFloat($("#rate").val());
    let output = $("#output");

    // Validates that the user entered a positive and nonzero number
    // If not value of hours is set to an empty string so the user can try again
    if (isNaN(hours) || hours <= 0) {
        alert("Please enter valid hours.");
        $("#hours").val("");
        return;
    }

    // Calculates the rate * hour and assigns the output to the output variable
    let calculation = rate * hours;
    output.text("Total: $" + calculation);
})

