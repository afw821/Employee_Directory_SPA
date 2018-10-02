(function() {
    $('#about').hide();
})();

const showHome = function(){
    $('#homepage').show();
    $('#about').hide();
};

const showAbout = function(){
    $('#homepage').hide();
    $('#about').show();
};

$('#home').on('click', showHome);
$('#about-us').on('click', showAbout);