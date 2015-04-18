// var demoApp = angular.module('demoApp', ['demoControllers']);

var demoApp = angular.module('demoApp', ['ngRoute', 'demoControllers', 'demoServices']);

demoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/firstview', {
    templateUrl: 'partials/firstview.html',
    controller: 'FirstController'
  }).
  when('/secondview', {
    templateUrl: 'partials/secondview.html',
    controller: 'SecondController'
  }).
  when('/settings', {
    templateUrl: 'partials/settings.html',
    controller: 'SettingsController'
  }).
  when('/llamalist', {
    templateUrl: 'partials/llamalist.html',
    controller: 'LlamaListController'
  }).
  otherwise({
    redirectTo: '/settings'
  });
}]);

$(document).ready(function(){
    var $window = $(window);
    var $leftColumn = $('#leftColumn');
    var top = $leftColumn.offset().top;
    var left = $leftColumn.offset().left;
    var width = $leftColumn.css('width');
    console.log($(window).width());
    if ($(window).width() > 1024) {
        $(document).on('scroll', function(){
            var scrollTop = $window.scrollTop();
            if (scrollTop >= top) {
                //console.log($leftColumn.hasClass('fixed'));
                if (!$leftColumn.hasClass('fixed')) {
                    $leftColumn.css({
                        left: left,
                        width: width
                    });
                    $leftColumn.addClass('fixed');
                }
            } else {
                if ($leftColumn.hasClass('fixed')) {
                    $leftColumn.removeClass('fixed');
                    $leftColumn.css({
                        left:0
                    });
                }
            }
        });
    }

});