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
    
    const containerOne = document.querySelector('#chapter1');
    
    for (let d = 1; d < 13; d++) {
        let enclosingDiv = document.createElement('div');
        let portfolioItemDiv = document.createElement('div');
        enclosingDiv.appendChild(portfolioItemDiv).className = 'portfolio-item';
        let a = document.createElement('a');
        $(a).attr("data-toggle", "modal");

        $(a).attr("href", '#portfolioModal' + d);
        console.log($(a).href);
        portfolioItemDiv.appendChild(a).className = 'portfolio-link';
        let hoverDiv = document.createElement('div');
        let i = document.createElement('div');
        hoverDiv.appendChild(i);
        let photo = document.createElement('img');

        $(photo).attr('src', 'assets/images/Chapitre_I_thumb/Chapitre1_' + d + '_thumb.jpg');
        a.appendChild(hoverDiv).className = 'portfolio-hover-content';
        a.appendChild(photo).className = 'img-fluid';

        containerOne.appendChild(enclosingDiv).className = 'col-lg-4 col-sm-6 mb-4';
    }; 

    const containerTwo = document.querySelector('#chapter2');
    
    for (let d = 1; d < 13; d++) {
        let enclosingDiv = document.createElement('div');
        let portfolioItemDiv = document.createElement('div');
        enclosingDiv.appendChild(portfolioItemDiv).className = 'portfolio-item';
        let a = document.createElement('a');
        $(a).attr("data-toggle", "modal");

        $(a).attr("href", '#portfolioModalchap2_' + d);
        console.log($(a).href);
        portfolioItemDiv.appendChild(a).className = 'portfolio-link';
        let hoverDiv = document.createElement('div');
        let i = document.createElement('div');
        hoverDiv.appendChild(i);
        let photo = document.createElement('img');

        $(photo).attr('src', 'assets/images/Chapitre_II_thumb/Chapitre2_' + d + '_thumb.jpg');
        a.appendChild(hoverDiv).className = 'portfolio-hover-content';
        a.appendChild(photo).className = 'img-fluid';

        containerTwo.appendChild(enclosingDiv).className = 'col-lg-4 col-sm-6 mb-4';
    }; 

    const containerThree = document.querySelector('#chapter3');
    
    for (let d = 1; d < 11; d++) {
        let enclosingDiv = document.createElement('div');
        let portfolioItemDiv = document.createElement('div');
        enclosingDiv.appendChild(portfolioItemDiv).className = 'portfolio-item';
        let a = document.createElement('a');
        $(a).attr("data-toggle", "modal");

        $(a).attr("href", '#portfolioModalchap3_' + d);
        console.log($(a).href);
        portfolioItemDiv.appendChild(a).className = 'portfolio-link';
        let hoverDiv = document.createElement('div');
        let i = document.createElement('div');
        hoverDiv.appendChild(i);
        let photo = document.createElement('img');

        $(photo).attr('src', 'assets/images/Chapitre_III_thumb/Chapitre3_' + d + '_thumb.jpg');
        a.appendChild(hoverDiv).className = 'portfolio-hover-content';
        a.appendChild(photo).className = 'img-fluid';

        containerThree.appendChild(enclosingDiv).className = 'col-lg-4 col-sm-6 mb-4';
    }; 

    

    // for (let d = 1; d < 13; d++) {
    //     const modal = document.querySelector('#portfolio-modal');
        
    //     let mainModal = document.createElement('div');
    //     $(mainModal).attr('id', '#portfolioModal' + d);
    //     $(mainModal).attr('tabindex', '-1');
    //     $(mainModal).attr('role', 'dialog');
    //     $(mainModal).attr('aria-hidden', 'true');

    //     let enclosingDiv = document.createElement('div');
    //     mainModal.appendChild(enclosingDiv).className = 'modal-dialog';

    //     let modalContentDiv = document.createElement('div');
    //     enclosingDiv.appendChild(modalContentDiv).className = 'modal-content';

    //     let closeModal = document.createElement('div');
    //     $(closeModal).attr('data-dismiss', 'modal');
    //     // $(closeModal).html() = 'X';
    //     let containerDiv = document.createElement('div');
    //     modalContentDiv.appendChild(closeModal).className = 'close-modal', 'close-modal-X';
    //     modalContentDiv.appendChild(containerDiv).className = 'container';

    //     let row = document.createElement('div');
    //     containerDiv.appendChild(row).className = 'row', 'justify-content-center';
    //     let colDiv = document.createElement('div');
    //     row.appendChild(colDiv).className = 'col-lg-12';
    //     let modalBody = document.createElement('div');
    //     colDiv.appendChild(modalBody).className = 'modal-body';
    //     let img = document.createElement('img');
    //     $(img).attr('src', 'assets/images/Chapitre_I/Chapitre1_' + d + '.jpg');
    //     modalBody.appendChild(img).className = 'img-fluid', 'd-block', 'mx-auto';

    //     modal.appendChild(mainModal).className = 'portfolio-modal', 'modal', 'fade';
    // }




})(jQuery); // End of use strict
