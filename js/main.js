'use strict';

var wrap = $('#wrapper'),
     btn = $('.addSocialButton'),
     modal = $('.cover, .modal, .content');

btn.on('click', function() {
  modal.fadeIn();
});

// close modal
$('.close').click(function(){
    var select = $('.content');
    if ($(event.target).closest(select).length)
      return;
    modal.fadeOut();
    wrap.unbind('click');
});

