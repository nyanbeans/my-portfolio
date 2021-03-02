// glide js carousel

// get all carousels with glide class
const sliders = document.querySelectorAll('.glide')
const conf = {
    type: 'carousel',
    keyboard: true,
    //dragThreshold: false
}
sliders.forEach(item => {
  new Glide(item, conf).mount()
})


// smooth scroll for anchor tags
var $root = $('html, body');

$('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 800, function () {
        window.location.hash = href;
    });

    return false;
});