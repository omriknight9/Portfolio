
let lang = 1;
let valid;
let projectsImages = [];

$(document).ready((event) => {

    $('#darkToggle').click(() => {
        if (!$('#darkToggle').hasClass('dark')) {
            $("head").append("<link rel='stylesheet' type='text/css' href='css/darkMode.css' id='darkCss'/>");
        } else {
            $('#darkCss').remove();
        }
        
        $('#darkToggle').toggleClass('dark');
    });
    
    if (window.location.href.indexOf("lang=he") > -1) {
        setTimeout(() => {
            changeToHeb();
            window.history.pushState('page2', 'Title', 'index.html');
        }, 600)
    }

    $('.Xbtn').click(function () {
        $(this).parent().parent().fadeOut(150);
    })

    window.onbeforeunload = () => {
        window.scrollTo(0, 0);
    }

    $('#langBtnHe').click( () => {
        changeToHeb();
    });

    $('#langBtnEn').click(() => {
        changeToEng();
    });

    window.onscroll = () => {
        scrollIndicator()
        scrollBtn();
        lazyload();
    }
});

const scrollIndicator = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

const goToTop = () => {
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

const lazyload = () => {

    let lazyloadObject = document.querySelectorAll(".lazy");

    lazyloadObject.forEach((object) => {
        if (object.getBoundingClientRect().top + 250 < (window.innerHeight)) {
            object.classList.remove('lazy');
        }
    });
}

const goToDiv = (element) => {
    if ($(window).width() > 900) {
        $('html, body').animate({ scrollTop: $(element).position().top }, 'slow');
    } else if ($(window).width() < 900 && $(window).width() > 600) {
        $('html, body').animate({ scrollTop: $(element).position().top }, 'slow');
    } else if ($(window).width() < 600) {
        $('html, body').animate({ scrollTop: $(element).position().top }, 'slow');
    }
    
    setTimeout(() => {
        $('.closebtn').click();
    }, 300)

    setTimeout(() => {
        $(".headerContainer").css("opacity", 0);
        $(".headerContainer").css('pointer-events', 'none');
    }, 800)
}

const loadJson = (textFile) => {
    $.get(textFile, (data) => {
        projectsImages.push(JSON.parse(data));
        buildGallery(projectsImages);
    });
}

const buildGallery = (array) => {

    let section = array[0].projectsImages;

    for (let i = 0; i < section.length; i++) {

        $('<input>', {
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

        $('<img>', {
            id: 'slideImg1',
            src: './images' + section[i].image, 
        }).appendTo(slideImgWrapper);

        let slideNav = $('<div>', {
            class: 'nav'
        }).appendTo(slide);

        $('<label>', {
            class: 'prev',
            for: section[i].prev,
            text: '<',
            nextSlide: section[i].prevSlide,
            click: function() {
                checkSelected($(this).attr('nextSlide'));
            }
        }).appendTo(slideNav);

        $('<label>', {
            class: 'next',
            for: section[i].next,
            text: '>',
            nextSlide: section[i].nextSlide,
            click: function() {
                checkSelected($(this).attr('nextSlide'));
            }
        }).appendTo(slideNav);

        $('<label>', {
            for: 'img-' + (i + 1),
            class: 'nav-dot',
            id: 'img-dot-' + (i + 1),
            'slideNum': (i + 1)
        }).appendTo($('.nav-dots'));
    }

    $('#img-1').attr('checked', 'checked');
    $('#imgSliderWrapper').fadeIn('fast');
    $('#img-dot-1').addClass('selectedSlide');

    $(document).mouseup((e) => {
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

const checkSelected = (nextSlide) => {
    $('.nav-dot').removeClass('selectedSlide');
    $('#' + nextSlide).addClass('selectedSlide');
}
