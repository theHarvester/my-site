
$(document).ready(function(){
    var height = $(window).height();

    var cloud = makeCloud(getRandomArbitrary(0.4,1.0), getRandomInt(0, height / 2));
    animateCloud(cloud, getRandomInt(40000, 60000), 0);

    setInterval(function(){
        console.log('making cloud');
        var cloud = makeCloud(getRandomArbitrary(0.4,1.0), getRandomInt(0, height / 2));
        animateCloud(cloud, getRandomInt(40000, 60000), 0);
    },7000);


    $('a.icon').hover(function(){

    });

    $('#plane img').css('width',  getPxScale(400,0.5));

    // give it some time before the plane appears
    setTimeout(function() {
        $('#plane').css('right', function(){ return $(this).offset().right; }).animate({"right": '100%'}, 20000);
        console.log('here');
    }, 45000);

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

function makeCloud(scale, height){
    var cloud = $('#base-cloud').clone();
    cloud.removeAttr('id');
    $('.background-image').append(cloud);

    //randomizes the cloud size
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

    return cloud;
}

function animateCloud(cloud, timeout, startDistance){
    var widthPx = $(window).width() + 300 + startDistance;
    cloud.css('left', function(){ return $(this).offset().left + startDistance; }).animate({"left":widthPx + 'px'}, timeout);

    setTimeout(function() {
        cloud.remove();
    }, timeout);
}