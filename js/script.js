console.log('js');

// Example1
// $('#para12,#close-btn1').hide();
// $('#para22,#close-btn2').hide();
// $('#para32,#close-btn3').hide();
// $('.intro-image').hide();

// Example2
$('#para12, #para22, #para32').hide();


//copy the wrapper from w3schools
// $ denotes jquery
//jquery wrapper is used to make sure that the elements get loaded first
$(document).ready(function(){

  $('.menu-icon').click(function(){
    $('.top-nav').toggleClass('active');
  });

// Example1
  // on clicking the read-more-btn, execute the function
  // $('#read-more-btn1').click(function(){
  //   $('#para12,#close-btn1').show();
  // });

  // $('#close-btn1').click(function(){
  //   $('#para12,#close-btn1').show();
  // });

  // $('#read-more-btn2').click(function(){
  //   $('#para22,#close-btn2').show();
  // });

  // $('#close-btn2').click(function(){
  //   $('#para22,#close-btn2').hide();
  // });


  // $('#read-more-btn3').click(function(){
  //   $('#para32,#close-btn3').show();
  // });
  //
  // $('#close-btn3').click(function(){
  //   $('#para32,#close-btn3').hide();
  // });



// Example 2
  // Toggle is hide and show
  $('#read-more-btn1').click(function(){
    $('#para12').toggle();
  });

  $('#read-more-btn2').click(function(){
    $('#para22').toggle();
  });

  $('#read-more-btn3').click(function(){
    $('#para32').toggle();
  });

  $('#showImages').click(function(){
    $('.intro-image').slideToggle('slow');
  });
  //try fadeToggle()

  // scrolling smoothly to a part of web page

  $('#product').click(function(){
    $('html,body').animate({
      scrollTop: $('#introImage1').offset().top + 100}, 3000);
    });


    // adding or changing css properties
  // $('body').click(function(){
  //   $(this).css('background','gray').css('color','white');//chaining
  //   $('p').css('border','2px solid red');
  // });

  $('body').click(function(){
    $(this).addClass('bodyClass');
  });



  // Adding html element
  $('#showOneMore').click(function(){
    $('#image-container')
    .append('<img class="image-big" src="images/cones.jpeg" alt="Image">')
    .prepend('<h1 class="image-heading">More Images</h1>');
  });

}); //document ready
