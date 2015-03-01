$(window).load(function () {

    var theWindow = $(window),
        $slide1 = $(".slide1"),
        aspectRatio = $slide1.width() / $slide1.height();

    function resizeSlide1() {

        if ((theWindow.width() / theWindow.height()) < aspectRatio) {
            $slide1
                .removeClass()
                .addClass('slide1height');
        } else {
            $slide1
                .removeClass()
                .addClass('slide1width');
        }

    }

    theWindow.resize(resizeSlide1).trigger("resize");

});