var printText = $('.text').data('text');

var contentArray = printText.split('/n');
var animationStarted = false;

function startAnimation() {
    $.each(contentArray, function(index, newLine) {
        $('.text').append('<span style="display:block;" id="'+index+'"></span>');
        
        var lineID = index;
        var self = $(this);
          setTimeout(function () {
            $.each(self, function(index, chunk){
                setTimeout(function () {
                  $('#'+lineID).append("<span>"+chunk+"</span>");
                  $('body, html').scrollTop($(document).height());
                }, index*5);
            });
            
          }, index*100);
      });
}

// Listen for the scroll event
$(window).scroll(function() {
    // Get the current scroll position
    var scrollPosition = $(window).scrollTop();
  
    // You can adjust the value below based on when you want the animation to start
    var triggerPosition = 1;
  
    // Check if the user has scrolled down beyond the trigger position
    if (scrollPosition > triggerPosition && !animationStarted) {
      // Start the animation
      startAnimation();
      animationStarted = true; // Set a flag to ensure the animation starts only once
    }
  });