$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var devourIt = $(this).data("devourIt");

        var devourState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(
            function () {
                console.log("changed devour to: " + devourIt);
                //reload the page to see the update
                location.reload()
            }
        );
    });

    $(".createBurger").on("submit", function (event) {
        //make sure to preventDefault on submit event
        event.preventDefault();

        var newBurger = {
            burgerType: $("#burg").val().trim(),

        };

        //send POST requests
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("New Burger made");
                //reload the page to see the update
                location.reload();
            }
        );
    });
});