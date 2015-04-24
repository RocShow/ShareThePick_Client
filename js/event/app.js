/**
 * Created by Show on 4/23/15.
 */

$(document).ready(function () {
    $(document).foundation({
        orbit: {
            next_on_click: false, // Advance to next slide on click
            slide_number: false,
            slide_number_text: 'of',
            bullets: true, // Does the slider have bullets visible?
            circular: false, // Does the slider should go to the first slide after showing the last?
            timer: false, // Does the slider have a timer active? Setting to false disables the timer.
            variable_height: false, // Does the slider have variable height content?
            swipe: true
        }
    });
    var map;

    var addresses = 'Siebel Center, Champaign, IL';

    $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses+'&sensor=false', null, function (data) {
        var p = data.results[0].geometry.location
        var latlng = new google.maps.LatLng(p.lat, p.lng);
        var myOptions = {
            zoom: 3,
            center: latlng,
        };
        map = new google.maps.Map($('#map-canvas')[0], myOptions);
        new google.maps.Marker({
            position: latlng,
            map: map
        });

    });

    $('#uploadButton').on('click', function(){
        $('#upload')
            .html("")
            .append($('<h2>Uploading 5 photos...</h2>'))
            .append(createProgressBar('File Name 1', 0.1))
            .append(createProgressBar('File Name 2', 0.2))
            .append(createProgressBar('File Name 3', 0.3))
            .append(createProgressBar('File Name 4', 0.4))
            .append(createProgressBar('File Name 5', 0.5))
            .append($('<a class="close-reveal-modal" aria-label="Close">&#215;</a>'));
    })
    function createProgressBar(fileName, speed){
        var bar = $('<div class="progress alert"><span class="meter" style="width:0%">'+fileName+'</span></div>');
        increaseProgress(bar, speed);
        return bar;

    }

    function increaseProgress($ele, speed){
        var $span = $ele.find('span');
        var width = $span.css('width').split('%')[0];
        var interval = setInterval(function(){
            width = Number(width) + speed;
            if (width >= 100){
                $ele.removeClass('alert');
                $ele.addClass('success');
                clearInterval(interval);
            }
            $span.css('width', width + '%');
        }, 10);
    }

});