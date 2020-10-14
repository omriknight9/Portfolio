
let lang = 1;

let valid;

$(document).ready(function (event) {
    
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