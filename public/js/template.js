  $(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.menu-section').toggleClass("on");
    $("nav ul").toggleClass('hidden');
  });
(app.set('port', (process.env.PORT || 5000)); en app.listen(app.get('port'), function() { });
