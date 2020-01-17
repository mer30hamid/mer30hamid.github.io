// This is the "Offline copy of pages" service worker
// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
// Check compatibility for the browser we're running this in
if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("[PWA Builder] active service worker found, no need to register");
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("pwabuilder-sw.js", {
        scope: "./"
      })
      .then(function (reg) {
        console.log("[PWA Builder] Service worker has been registered for scope: " + reg.scope);
      });
  }
}

// Persian days ago
jQuery.timeago.settings.strings = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: "پیش",
    suffixFromNow: "از حال",
    seconds: "کمتر از یک دقیقه",
    minute: "حدود یک دقیقه",
    minutes: "%d دقیقه",
    hour: "حدود یک ساعت",
    hours: "حدود %d ساعت",
    day: "یک روز",
    days: "%d روز",
    month: "حدود یک ماه",
    months: "%d ماه",
    year: "حدود یک سال",
    years: "%d سال"
};
$(document).ready(function () {
  jQuery(".date").timeago(); // Persian days ago
  $('a.blog-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
   }
  })

    /*
  if ((window.location.hash && window.location.hash == '#blog') || (window.location.pathname !== '/' && window.location.pathname !== '/index.html')) {
    $('.panel-cover').addClass('panel-cover--collapsed')
   }
    */
  /*
  if (!((window.location.hash && window.location.hash == '#blog') || (window.location.pathname !== '/' && window.location.pathname !== '/index.html'))) {
    $('.panel-cover').removeClass('panel-cover--collapsed')
   }
  */

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

})