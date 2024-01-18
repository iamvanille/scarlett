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

    // Van: hide modal on mobile
    for (let i = 1; i < 32; i += 1) {
        let modal = '#portfolioModal' + i;
        $(modal).on('show.bs.modal', function (e) {
            if (window.innerWidth <= 768) {
                return e.preventDefault();
            }
        })}
        (let y = 1; y < 4; y++) {
        
            let numberOfPhotos = 17;
            // set number of photos for categories
            if (y == 1) {
                numberOfPhotos = 17;
            } else if (y == 2) {
                numberOfPhotos = 16;
            } else {
                numberOfPhotos = 15;
            };
    

    // Photo chapters
    for (let x = 1; x < 4; x++) {
        let container = document.querySelector('#chapter'+ x);

        let numberOfPhotos = 17;
        if (x == 1) {
            numberOfPhotos = 17;
        } else if (x == 2) {
            numberOfPhotos = 16;
        } else {
            numberOfPhotos = 15;
        };

        for (let d = 1; d < numberOfPhotos; d++) {
            let enclosingDiv = document.createElement('div');
            let portfolioItemDiv = document.createElement('div');
            enclosingDiv.appendChild(portfolioItemDiv).className = 'portfolio-item';
            let a = document.createElement('a');
            $(a).attr("data-toggle", "modal");
    
            $(a).attr("href", '#portfolioModalchap' + x + '_' + d);
            console.log($(a).href);
            portfolioItemDiv.appendChild(a).className = 'portfolio-link';
            let hoverDiv = document.createElement('div');
            let i = document.createElement('div');
            hoverDiv.appendChild(i);
            let photo = document.createElement('img');
    
            $(photo).attr('src', 'assets/images/Chapitre_' + x + '_thumb/Chapitre' + x + '_' + d + '_thumb.jpg');
            a.appendChild(hoverDiv).className = 'portfolio-hover-content';
            a.appendChild(photo).className = 'img-fluid';
    
            container.appendChild(enclosingDiv).className = 'col-lg-4 col-sm-6 mb-4';
        }; 
    };

    // Modals
    let body = document.getElementById("page-top");

    for (let y = 1; y < 4; y++) {
        
        let numberOfPhotos = 17;
        // set number of photos for categories
        if (y == 1) {
            numberOfPhotos = 17;
        } else if (y == 2) {
            numberOfPhotos = 16;
        } else {
            numberOfPhotos = 15;
        };



        for (let d = 1; d < numberOfPhotos; d++) {

            let mainModal = document.createElement('div');
            $(mainModal).attr('id', 'portfolioModalchap' + y + '_' + d);
            $(mainModal).attr('tabindex', '-1');
            $(mainModal).attr('role', 'dialog');
            $(mainModal).attr('aria-hidden', 'true');

            let modalDialogDiv = document.createElement('div');
            mainModal.appendChild(modalDialogDiv).className = 'modal-dialog';

            let modalContentDiv = document.createElement('div');
            modalDialogDiv.appendChild(modalContentDiv).className = 'modal-content';

            let closeModal = document.createElement('div');
            $(closeModal).attr('data-dismiss', 'modal');
            closeModal.innerHTML = 'X';
            console.log(closeModal.innerHTML);
            let containerDiv = document.createElement('div');
            modalContentDiv.appendChild(closeModal).className = 'close-modal', 'close-modal-X';
            modalContentDiv.appendChild(containerDiv).className = 'container';

            let row = document.createElement('div');
            containerDiv.appendChild(row).className = 'row', 'justify-content-center';
            let colDiv = document.createElement('div');
            row.appendChild(colDiv).className = 'col-lg-12';
            let modalBody = document.createElement('div');
            colDiv.appendChild(modalBody).className = 'modal-body';
            let img = document.createElement('img');
            $(img).attr('src', 'assets/images/Chapitre_' + y + '/Chapitre' + y + '_' + d + '.jpg');
            modalBody.appendChild(img).className = 'img-fluid', 'd-block', 'mx-auto';

            body.appendChild(mainModal).classList = "portfolio-modal modal fade";
        };
    };

})(jQuery); // End of use strict
