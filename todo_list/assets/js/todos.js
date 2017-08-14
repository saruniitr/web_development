
// mark the items as completed
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
})

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(200, function() {
        $(this).remove();
    });
    event.stopPropagation();
})

// capture new todo item
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var new_todo = $(this).val();

        $(this).val("");
        // append it to the list
        $("ul").append("<li> <span> <i class=\"fa fa-trash\"></i> </span> " + new_todo + "</li>");
    }
});

// toggle add new todo input
$(".fa-minus").click(function() {
    $(this).toggleClass('fa-plus fa-minus')
    $("input[type='text']").fadeToggle(100);
})