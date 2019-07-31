$(function () {
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var addBurger = {
            burger_name: $("#addBurger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: addBurger,
        }).then(function(){
            console.log("New Burger Added!!!!");
            location.reload();
        });
    });

    $("#devour-burger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var eaten = {
            devoured : 1
        };
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: eaten
        }).then(function(){
            console.log("Yum, That was Good!!!!");
            location.reload();
        });
    });
});