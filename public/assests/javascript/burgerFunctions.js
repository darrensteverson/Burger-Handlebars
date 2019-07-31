$(function () {
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var addBurger = {
            burger_name: $("#addBurger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurger,
        }).then(function(){
            console.log("New Burger Added!!!!");
            location.reload();
        });
    });

    $(".devour-burger").on("click", function(event){
        event.preventDefault();
    })
});