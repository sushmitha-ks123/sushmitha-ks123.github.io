(function() {
    const header = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.icon-container');
    icon.onclick = function() {
        header.classList.toggle('menu-open');
    }
}());

$(document).ready(function() {
    $(".card-header").click(function() {
        // self clicking close
        if ($(this).next(".card-body").hasClass("active")) {
            $(this).next(".card-body").removeClass("active").slideUp()
            $(this).children("span").removeClass("fa-minus").addClass("fa-plus")
        } else {
            $(".card .card-body").removeClass("active").slideUp()
            $(".card .card-header span").removeClass("fa-minus").addClass("fa-plus");
            $(this).next(".card-body").addClass("active").slideDown()
            $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
        }
    })
})