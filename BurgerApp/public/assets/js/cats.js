// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
            $(".change-sleep").on("click", function(event) {
                    var id = $(this).data("id");
                    var newDevour = $(this).data("newdevour");

                    var newSleepState = {
                        Devour: newDevour

                        // Send the PUT request.
                            $.ajax("/api/burger/" + id, {
                            type: "PUT",
                            data: newSleepState
                        }).then(
                            function() {
                                console.log("changed devour to", newDevour);
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
                        Devour: $("[name=Devour]:checked").val().trim()
                    };

                    // Send the POST request.
                    $.ajax("/api/burger", {
                        type: "POST",
                        data: newBurger
                    }).then(
                        function() {
                            console.log("created new Burger");
                            // Reload the page to get the updated list
                            location.reload();
                        }
                    );
                });

                // $(".delete-cat").on("click", function(event) {
                //     var id = $(this).data("id");

                //     // Send the DELETE request.
                //     $.ajax("/api/burger/" + id, {
                //         type: "DELETE"
                //     }).then(
                //         function() {
                //             console.log("deleted cat", id);
                //             // Reload the page to get the updated list
                //             location.reload();
                //         }
                //     );
                // });
            });