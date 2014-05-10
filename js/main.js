
$(document).ready(function(){
    var height = $(window).height();
    makeCloud(getRandomArbitrary(0.4,1.0), getRandomInt(40000, 60000), getRandomInt(0, height / 2));
    setInterval(function(){
        makeCloud(getRandomArbitrary(0.4,1.0), getRandomInt(40000, 60000), getRandomInt(0, height / 2));
    },7000);


    $('a.icon').hover(function(){

    });

    $('#plane img').css('width', $(window).width() / 8);

    loop();
});

function getPxScale(base, scale){
    return Math.floor(base * scale) + 'px';
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function makeCloud(scale, timeout, height){
    var cloud = $('#base-cloud').clone();
    cloud.removeAttr('id');
    $('.background-image').append(cloud);

    cloud.children('.cloud-main').css('width', getPxScale(350,scale));
    cloud.children('.cloud-main').css('height', getPxScale(130,scale));
    cloud.children('.cloud-main').css('top', getPxScale(50,scale));

    cloud.children('.cloud-center').css('width', getPxScale(180,scale));
    cloud.children('.cloud-center').css('height', getPxScale(180,scale));
    cloud.children('.cloud-center').css('right', getPxScale(50,scale));

    cloud.children('.cloud-left').css('width', getPxScale(130,scale));
    cloud.children('.cloud-left').css('height', getPxScale(130,scale));
    cloud.children('.cloud-left').css('right', getPxScale(130,scale));

    cloud.css('width', getPxScale(350,scale));
    cloud.css('height', getPxScale(400,scale));
    cloud.css('top', height);

    var widthPx = $(window).width() + 300;
    cloud.css('left', function(){ return $(this).offset().left; }).animate({"left":widthPx + 'px'}, timeout);

    setTimeout(function() {
        cloud.remove();
    }, timeout);
}

function loop() {
    $('#plane').animate({'top': '20'}, {
        duration: 2000,
        complete: function() {
            $('#plane').animate({top: 0}, {
                duration: 2000,
                complete: loop});
        }});
}