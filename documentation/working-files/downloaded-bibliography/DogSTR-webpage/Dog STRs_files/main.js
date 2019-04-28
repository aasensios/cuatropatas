(function($) {
$.fn.menumaker = function(options) {  
 var topnav = $(this), settings = $.extend({
   format: "dropdown",
   sticky: false
 }, options);
 return this.each(function() {
   $(this).find(".button").on('click', function(){
     $(this).toggleClass('menu-opened');
     var mainmenu = $(this).next('ul');
     if (mainmenu.hasClass('open')) { 
       mainmenu.slideToggle().removeClass('open');
     }
     else {
       mainmenu.slideToggle().addClass('open');
       if (settings.format === "dropdown") {
         mainmenu.find('ul').show();
       }
     }
   });
   topnav.find('li ul').parent().addClass('has-sub');
multiTg = function() {
     topnav.find(".has-sub").prepend('<span class="submenu-button"></span>');
     topnav.find('.submenu-button').on('click', function() {
       $(this).toggleClass('submenu-opened');
       if ($(this).siblings('ul').hasClass('open')) {
         $(this).siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $(this).siblings('ul').addClass('open').slideToggle();
       }
     });
   };
   if (settings.format === 'multitoggle') multiTg();
   else topnav.addClass('dropdown');
   if (settings.sticky === true) topnav.css('position', 'fixed');
resizeFix = function() {
  var mediasize = 700;
     if ($( window ).width() > mediasize) {
       topnav.find('ul').show();
     }
     if ($(window).width() <= mediasize) {
       topnav.find('ul').hide().removeClass('open');
     }
   };
   resizeFix();
   return $(window).on('resize', resizeFix);
 });
  };
})(jQuery);

(function($){
$(document).ready(function(){
$("#topnav").menumaker({
   format: "multitoggle"
});
});
})(jQuery);