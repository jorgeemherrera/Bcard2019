$('.star').click(function(e) {
    var length = $('.wrap--item__calificacion--container .star').length;
    var selected = $('.wrap--item__calificacion--container .star').index($(this));

    $(".wrap--item__calificacion--container .star").each(function(index) {
        if (index <= selected) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");

        }

    });

});