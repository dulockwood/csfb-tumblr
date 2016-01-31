
$(function() {
   var links = $('a.link').click(function() {
       links.removeClass('tag-active');
       $(this).addClass('tag-active');
   });
});


$(document).ready(function() {
      /*
       * Open the drawer when the menu ison is clicked.
       */
      var menu = document.querySelector('#menu');
      var main = document.querySelector('.container');
      var drawer = document.querySelector('#drawer');

      menu.addEventListener('click', function(e) {
        drawer.classList.toggle('open');
        e.stopPropagation();
      });
      main.addEventListener('click', function() {
        drawer.classList.remove('open');
      });
      
      
});