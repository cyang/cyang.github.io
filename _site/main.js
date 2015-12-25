function main() {
    $(".jumper").on("click", function (e) {

        e.preventDefault();

        $("body, html").animate({
            scrollTop: $($(this).attr('href')).offset().top - 45
        }, 500);

    });

    $('.arrow-next').click(function (e) {
        e.preventDefault();
        sliderNext();
    });

    $('.arrow-prev').click(function (e) {
        e.preventDefault();
        sliderPrev();
    });
}

function sliderNext() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next()

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if (nextSlide.length == 0) {
        nextSlide = $('.slide').first();
        nextDot = $('.dot').first();
    }

    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
}

function sliderPrev() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if (prevSlide.length == 0) {
        prevSlide = $('.slide').last();
        prevDot = $('.dot').last();
    }

    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
}

$(document).ready(main);