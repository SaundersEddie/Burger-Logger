// Our burger js code goes in here
// Eddie Saunders saunders.eddie@outlook.com 13th May 2020
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
        //event.preventDefault();
        console.log("clicking devour baby!");
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var devoured = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(
            function() {
                console.log("changed devoured to", devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            // sleepy: $("[name=sleepy]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger baby!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});