/*!
=========================================================
* Work Place It solutions Landing page
=========================================================

* Copyright: 2022 WorkPlace It Solutions
* Licensed: WorkPlace It Solutions
* Coded by WorkPlace It Solutions

=========================================================

*/ 

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 
