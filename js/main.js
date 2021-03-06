
let lang = 1;
let valid;
let projectsImages = [];

$(document).ready(function (event) {

    $('#darkToggle').click(function() {
        if (!$('#darkToggle').hasClass('dark')) {
            $("head").append("<link rel='stylesheet' type='text/css' href='css/darkMode.css' id='darkCss'/>");
        } else {
            $('#darkCss').remove();
        }
        
        $('#darkToggle').toggleClass('dark');
    });
    
    if (window.location.href.indexOf("lang=he") > -1) {
        setTimeout(function(){
            changeToHeb();
            window.history.pushState('page2', 'Title', 'index.html');
        }, 600)
    }

    $('.Xbtn').click(function () {
        $(this).parent().parent().fadeOut(150);
    })

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    $('#langBtnHe').click(function () {
        changeToHeb();
    });

    $('#langBtnEn').click(function () {
        changeToEng();
    });

    window.onscroll = function () {
        scrollIndicator()
        scrollBtn();
        lazyload();
    }
});

function scrollIndicator() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function goToTop() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
}

function scrollBtn() {
    if ($(this).scrollTop() > 550) {
        $('#goToTopBtn').fadeIn();
    }
    else {
        $('#goToTopBtn').fadeOut();
    }
}

function lazyload() {

    let lazyloadObject = document.querySelectorAll(".lazy");

    let scrollTop = window.pageYOffset;

    lazyloadObject.forEach(function (object) {
        if (object.getBoundingClientRect().top + 250 < (window.innerHeight)) {
            object.classList.remove('lazy');
        }
    });
}

function goToDiv(element) {
    if ($(window).width() > 900) {
        $('html, body').animate({ scrollTop: $(element).position().top }, 'slow');
    } else if ($(window).width() < 900 && $(window).width() > 600) {
        $('html, body').animate({ scrollTop: $(element).position().top }, 'slow');
    } else if ($(window).width() < 600) {
        $('html, body').animate({ scrollTop: $(element).position().top }, 'slow');
    }
    
    setTimeout(function () {
        $('.closebtn').click();
    }, 300)

    setTimeout(function () {
        $(".headerContainer").css("opacity", 0);
        $(".headerContainer").css('pointer-events', 'none');
    }, 800)
}

function loadJson(textFile) {
    $.get(textFile, function (data) {
        projectsImages.push(JSON.parse(data));
        buildGallery(projectsImages);
    });
}

function buildGallery(array) {

    let section = array[0].projectsImages;

    for (var i = 0; i < section.length; i++) {

        let input = $('<input>', {
            type: 'radio',
            name: 'radio-btn',
            id: 'img-' + (i + 1),
        }).insertBefore($('.nav-dots'));

        let slide = $('<li>', {
            class: 'slide-container',
            'slideNum': (i + 1)
        }).insertBefore($('.nav-dots'));

        let slideImgWrapper = $('<div>', {
            class: 'slide'
        }).appendTo(slide);

        let slideImg = $('<img>', {
            id: 'slideImg1',
            src: './images' + section[i].image, 
        }).appendTo(slideImgWrapper);

        let slideNav = $('<div>', {
            class: 'nav'
        }).appendTo(slide);

        let leftLbl = $('<label>', {
            class: 'prev',
            for: section[i].prev,
            text: '<',
            nextSlide: section[i].prevSlide,
            click: function() {
                checkSelected($(this).attr('nextSlide'));
            }
        }).appendTo(slideNav);

        let rightLbl = $('<label>', {
            class: 'next',
            for: section[i].next,
            text: '>',
            nextSlide: section[i].nextSlide,
            click: function() {
                checkSelected($(this).attr('nextSlide'));
            }
        }).appendTo(slideNav);

        let dot = $('<label>', {
            for: 'img-' + (i + 1),
            class: 'nav-dot',
            id: 'img-dot-' + (i + 1),
            'slideNum': (i + 1)
        }).appendTo($('.nav-dots'));
    }

    $('#img-1').attr('checked', 'checked');
    $('#imgSliderWrapper').fadeIn('fast');
    $('#img-dot-1').addClass('selectedSlide');

    $(document).mouseup(function (e) {
        if ($('#imgSliderWrapper').is(e.target) && $('#imgSliderWrapper').has(e.target).length === 0) {
            $('#imgSliderWrapper').fadeOut('fast');
            e.stopPropagation();
            $(document).off('mouseup');
            $('#imgSliderWrapper input').remove();
            $('.slide-container, .nav-dot').remove();
            projectsImages = [];
        }
    })   
}

function checkSelected(nextSlide) {
    $('.nav-dot').removeClass('selectedSlide');
    $('#' + nextSlide).addClass('selectedSlide');
}
