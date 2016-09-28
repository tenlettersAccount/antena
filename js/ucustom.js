$(document).ready(function(){
    $('.overlay').click(function() {
		$(this).remove();
	});
    
    
     $('.radio li').prepend('<div class="radio_circle"><div class="radio_circle_in"></div></div>');
      $('body').on('click', '.radio li', function () {
            $(this).parents('ul').find('.radio_circle_in').removeClass('radio_circle_in_active');
            $(this).find('.radio_circle_in').addClass('radio_circle_in_active');
        });
    
    $('.mmenu').click(function(){
    // create menu variables
    var slideoutMenu = $('.left-menu');
    var slideoutMenuWidth = $('.left-menu').width();

    // toggle open class
    slideoutMenu.toggleClass("open");

    // slide menu
    if (slideoutMenu.hasClass("open")) {
        slideoutMenu.animate({
            left: "0px"
        },800);	
    } else {
        slideoutMenu.animate({
            left: -slideoutMenuWidth
        }, 800);	
    }
    });       
            
            
    
    $('#myCarousel').carousel({
	    interval: 3000
	});


    
    var s = $('.search-container input'),
    f  = $('.search-container'),
    a = $('.after'),
		m = $('h4');

    s.focus(function(){
      if( f.hasClass('open') ) return;
      f.addClass('in');
      setTimeout(function(){
        f.addClass('open');
        f.removeClass('in');
      }, 2000);
    });

    a.on('click', function(e){
      e.preventDefault();
      if( !f.hasClass('open') ) return;
       s.val('');
      f.addClass('close');
      f.removeClass('open');
        f.removeClass('close');
    })

    f.submit(function(e){
      e.preventDefault();
      m.html('Thanks, high five!').addClass('show');
      f.addClass('explode');
      setTimeout(function(){
        s.val('');
        f.removeClass('explode');
        m.removeClass('show');
      }, 3000);
    })
    
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width<1200){
        console.log('nice');
        
        $('.carousel-inner .row-fluid').unwrap();
        $('.carousel-inner .inblock3').unwrap();
        $('.carousel-inner .inblock3').attr('class','item');
        $('.carousel-inner .item:first-child').attr('class','item active');
        
      
    };




    jQuery(function($){
        $(".ftel").mask("+7(999)-999-99-99");

    });
    


    
    
    
    $('#closeaf').click(function(){
         $('.answerform').css({'display':'none'});
         $('.sel_call_timer').css({'display':'block'});
    });
    /*Спасибо за заказ*/
    $('.orderwf').click(function(){
        
         $('.wdecor').css({'display':'none'});
         $('.thanksfororder').css({'display':'block'});
    });
    
    $('.fastb').click(function(){
         $('.fastorder').css({'display':'block'});
    });
    
    $('.closefo').click(function(){
         $('.fastorder').css({'display':'none'});
    });
    
    $('.decor').click(function(){
         $('.wpopupbody').css({'display':'none'});
         $('.wdecor').css({'display':'block'});
    });
    
    $('.goback').click(function(){
         $('.wpopupbody').css({'display':'block'});
         $('.wdecor').css({'display':'none'});
    });
    
    
        /*Жду звонка*/
    
    $('.call').click(function(){
        $('.wzen_popup_nav').removeClass('animated slideInRight');
        $('.wzen_popup_nav').addClass('animated slideOutRight');
        
        $('.popupbody').addClass('animated slideOutLeft');
        $('.marina_img').removeClass('animated slideOutLeft');
        setTimeout(function (){ 
            $('.popupbody').css({'display':'none'});
            $('.marina_img').css({'display':'block'});
            $('.marina_img').addClass('animated slideInRight');
            
             $('.popupbody').css({'display':'none'});
            $('.wzen_popup_nav').css({'display':'none'});
             $('.marina_img').css({'display':'block'});
         $('.zen_popup_nav').removeClass('animated slideOutRight');
            $('.zen_popup_nav').css('display', 'block');
            $('.zen_popup_nav').addClass('animated slideInRight');
            $('.zen_popup_bg').fadeIn('fast');
        },500);
});
    
    /* surak koiatyn tereze awylad*/
    
$('.answers').click(function () {
        $('.wzen_popup_nav').removeClass('animated slideInRight');
        $('.wzen_popup_nav').addClass('animated slideOutRight');
        $('.popupbody').removeClass('animated slideOutLeft');
        $('.marina_img').addClass('animated slideOutLeft');
        setTimeout(function (){ 
            $('.popupbody').css({'display':'block'});
            $('.marina_img').css({'display':'none'});
            $('.popupbody').addClass('animated slideInRight');
                 
        $('.popupbody').css({'display':'block'});
        $('.wzen_popup_nav').css({'display':'none'});
         $('.marina_img').css({'display':'none'});
    $('.zen_popup_nav').removeClass('animated slideOutRight');
        $('.zen_popup_nav').css('display', 'block');
        $('.zen_popup_nav').addClass('animated slideInRight');
        $('.zen_popup_bg').fadeIn('fast');  
    },500);

    });
    
    /* korzinany awu uwin */
    
    $('.shopping').click(function () {
        
        $('.zen_popup_nav').removeClass('animated slideInRight');
        $('.zen_popup_nav').addClass('animated slideOutRight');
        $('.wpopupbody').removeClass('animated slideOutLeft');
        $('.decor3').addClass('animated slideOutLeft');
        
        

        setTimeout(function (){      
            $('.wpopupbody').css('display', 'block');
            $('.decor3').css('display', 'none');
            $('.wpopupbody').addClass('animated slideInRight');
            
            
            $('.wzen_popup_nav').removeClass('animated slideOutRight');
            $('.wzen_popup_nav').css('display', 'block');
            $('.wzen_popup_nav').addClass('animated slideInRight');
            $('.zen_popup_bg').fadeIn('fast');
            $('.zen_popup_nav').css('display', 'none');
        },500);
    });
    
    
$('.zen_call_form button').click(function () {
$('.zen_call_form').addClass('animated slideOutRight');
setTimeout(function () {
    $('.zen_call_timer').css('display', 'block');
    $('.zen_call_form').css('display', 'none');
    $('.zen_call_timer').addClass('animated slideInUp');
}, 1000);
});

    
    
    
    $('.zen_popup_bg, .pclose').click(function () {
        $('.zen_popup_bg').fadeOut('fast');

        $('.zen_popup_nav').removeClass('animated slideInRight');
        $('.zen_popup_nav').addClass('animated slideOutRight');
        setTimeout(function () {
            $('.zen_popup_nav').css('display', 'none');
        }, 1000);
    });
    
    



    /*indextagy tovary kartochkany auwu uwin*/
    $('.desc, .inblock4>img, .inblock4 .fa-search').click(function () {
        $('.decor3').removeClass('animated slideOutLeft');
        $('.wpopupbody').css({'display':'none'});
        $('.zen_popup_nav').css('display', 'none');
         $('.decor3').css({'display':'block'});
        console.log('asd');
        
        $('.wzen_popup_nav').removeClass('animated slideOutRight');
        $('.wzen_popup_nav').css('display', 'block');
        $('.wzen_popup_nav').addClass('animated slideInRight');
        $('.zen_popup_bg').fadeIn('fast');
    });
    /* filtr awu uwin*/
    $('.mfright').click(function () {
         $('.filtr').css({'display':'block'});
        console.log('asd');
        $('.filtr').removeClass('animated slideOutRight');
        $('.filtr').addClass('animated slideInRight');
    });
    /* to close filtr board*/
    $('.fclose').click(function () {
        $('.filtr').removeClass('animated slideInRight');
        $('.filtr').addClass('animated slideOutRight');
        setTimeout(function () {
            $('.filtr').css('display', 'none');
        }, 1000);
        
    });
    
    
    
    $('.zen_popup_bg, .wclose').click(function () {     
        
        $('.zen_popup_bg').fadeOut('fast');

        $('.wzen_popup_nav').removeClass('animated slideInRight');
        $('.wzen_popup_nav').addClass('animated slideOutRight');
        setTimeout(function () {
            $('.wzen_popup_nav').css('display', 'none');
            $('.wpopupbody').css({'display':'block'});
            $('.decor3').css({'display':'none'});
        }, 1000);
    });
    
    
//scroll
	// navigation click actions	
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
	// scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});
	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});    
    
// scroll function
function scrollToID(id, speed){
    if(width<1200){
        var offSet = 120;
    }else{
        var offSet = 80;
    }
	
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}

});
    