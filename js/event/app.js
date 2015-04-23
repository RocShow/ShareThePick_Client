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
            zoom: 17,
            center: latlng,
        };
        map = new google.maps.Map($('#map-canvas')[0], myOptions);
        new google.maps.Marker({
            position: latlng,
            map: map
        });

    });

});