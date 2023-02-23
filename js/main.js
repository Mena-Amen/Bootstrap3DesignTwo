$(function () {
  'use strict';
  $(window).scroll(function() {
    var navbar = $('.navbar');
    if ($(window).scrollTop() >= navbar.height()) {
      navbar.addClass('scrolled');
    } else {
      navbar.removeClass('scrolled');
    }
  });

  //* Deal with Tabs
  $('.tab-switch li').click(function(){
    //Add Selected Class To Active Link
    $(this).addClass('selected').siblings().removeClass('selected');
    // Hide All Divs
    $('.tabs-section .tab-content > div').hide();
    // Show All Divs
    $($(this).data('class')).show();
  });
});
