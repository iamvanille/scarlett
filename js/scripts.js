/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // hide modal on mobile
    for (let i = 1; i < 32; i += 1) {
        let modal = '#portfolioModal' + i;
        $(modal).on('show.bs.modal', function (e) {
            if (window.innerWidth <= 768) {
                return e.preventDefault();
            }
        })}
    
    // const container = document.querySelector('#chapter1');
    
    // for (let d = 1; d < 13; d++) {
    //     let enclosingDiv = document.createElement('div');
    //     enclosingDiv.classList.add('col-lg-4', 'col-sm-6', 'mb-4');
    //     let portfolioItemDiv = document.createElement('div');
    //     enclosingDiv.appendChild(portfolioItemDiv).className = 'portfolio-item';
    //     let a = document.createElement('a');
    //     $(a).attr("data-toggle", "modal");

    //     let modalName = '#portfolioModal' + d; 
    //     $(a).attr("href", modalName);
    //     console.log($(a).href);
    //     portfolioItemDiv.appendChild(a).className = 'portfolio-link';
    //     let hoverDiv = document.createElement('div');
    //     hoverDiv.classList.add('portfolio-hover-content');
    //     let i = document.createElement('div');
    //     hoverDiv.appendChild(i);
    //     let photo = document.createElement('img');
    //     photo.classList.add('img-fluid');

    //     let photoPath = 'assets/images/Chapitre_I_thumb/Chapitre1_' + d + '_thumb.jpg'
    //     $(photo).attr('src', photoPath);
    //     a.appendChild(hoverDiv);
    //     a.appendChild(photo);

    //     container.appendChild(enclosingDiv).className= 'col-lg-4 col-sm-6 mb-4';
    // }; 





})(jQuery); // End of use strict
